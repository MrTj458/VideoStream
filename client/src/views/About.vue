<template>
  <div class="about">
    <h1>About</h1>
    <p>This is a very basic video hosting app.</p>
    <p>It is intended to be used by people that want to host their own video files</p>
    <p>Created by: MrTj458</p>
    <p>
      View on
      <a href="https://github.com/MrTj458/VideoStream" target="_blank">Github</a>
    </p>
    <hr>
    <h3>How to use</h3>
    <ol>
      <li>Create a folder called 'videos' in the root of the app.</li>
      <li>Inside the video folder make a folder with the name of the show.</li>
      <li>Inside the show's folder make folders named with the season numbers.</li>
      <li>Inside the seasons folders place the episodes.</li>
      <li>Run the server:
        <ol>
          <li>Run 'npm run build'</li>
          <li>Run 'npm run start PORT production' (Replace PORT with the port you want the server to run on)</li>
        </ol>
      </li>
      <li>Visit the site in a web browser</li>
      <li>Enjoy watching!</li>
    </ol>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
hr {
  width: 50%;
}
li {
  margin-bottom: 5px;
}
a {
  text-decoration: underline;
  color: lightblue;
}
</style>
