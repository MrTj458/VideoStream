<template>
  <div class="video">
    <h4>{{ this.$route.query.n }} Season: {{ this.$route.query.s }} Episode: {{ this.$route.query.e }}</h4>
    <video ref="videoElement" v-on:click="togglePause">
      <source v-bind:src="src" typ="video/mp4">
    </video>
    
    <label for="volume">Volume</label>
    <input
      id="volume"
      name="volume"
      type="range"
      min="0"
      max="1"
      step="0.01"
      v-model="volume"
      v-on:change="changeVolume"
    >
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      src: `/api/video?n=${this.$route.query.n}&s=${this.$route.query.s}&e=${
        this.$route.query.e
      }`,
      videoPlayer: null,
      volume: 1
    };
  },
  methods: {
    togglePause() {
      if (this.videoPlayer.paused) {
        this.videoPlayer.play();
      } else {
        this.videoPlayer.pause();
      }
    },
    changeVolume() {
      this.videoPlayer.volume = this.volume;
    }
  },
  mounted() {
    this.videoPlayer = this.$refs.videoElement;
  }
};
</script>

<style scoped>
.video {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3 {
  padding: 0;
  margin-top: 10px;
}
video {
  margin: 0;
  padding: 0;
  width: 70%;
  height: 30%;
  border: solid 2px gray;
  border-radius: 2px;
}
#volume {
  width: 100px;
}
</style>
