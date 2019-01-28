const express = require('express')
const cors = require('cors')
const fs = require('fs')
const compression = require('compression')
const app = express()

const PORT = parseInt(process.argv[2]) || 3000
process.env.NODE_ENV = process.argv[3] || 'development'

app.use(compression())
app.use(cors())
app.use('/', express.static('public'))

app.get('/api/shows', (req, res) => {
	fs.readdir('./videos/', (err, shows) => {
		res.send(shows)
	})
})

app.get('/api/seasons', (req, res) => {
	fs.readdir(`./videos/${req.query.n}`, (err, seasons) => {
		res.send(seasons)
	})
})

app.get('/api/episodes', (req, res) => {
	fs.readdir(`./videos/${req.query.n}/${req.query.s}`, (err, episodes) => {
		res.send(episodes.map((e) => e.toString()))
	})
})

app.get('/api/video', (req, res) => {
	const path = `./videos/${req.query.n}/${req.query.s}/${req.query.e}.mp4`
	const stat = fs.statSync(path)
	const fileSize = stat.size
	const range = req.headers.range

	if (range) {
		const parts = range.replace(/bytes=/, '').split('-')
		const start = parseInt(parts[0], 10)
		const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1

		const chunkSize = end - start + 1
		const file = fs.createReadStream(path, { start, end })
		const head = {
			'Content-Range': `bytes ${start}-${end}/${fileSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunkSize,
			'Content-Type': 'video/mp4',
		}

		res.writeHead(206, head)
		file.pipe(res)
	} else {
		const head = {
			'Content-Length': fileSize,
			'Content-Type': 'video/mp4',
		}
		res.writeHead(200, head)
		fs.createReadStream(path).pipe(res)
	}
})

app.listen(PORT, () => {
	console.log(`Server started in ${process.env.NODE_ENV} mode.`)
	console.log(`Rinning on port ${PORT}`)
})
