<template>
  <div class="video">
    <h3>{{ this.$route.query.n }} Season: {{ this.$route.query.s }} Episode: {{ this.$route.query.e }}</h3>
    <video controls controlslist="nodownload">
      <source v-bind:src="src" typ="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      src: `/api/video?n=${this.$route.query.n}&s=${this.$route.query.s}&e=${
        this.$route.query.e
      }`
    };
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
}
</style>
