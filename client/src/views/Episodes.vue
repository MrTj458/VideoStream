<template>
  <div class="episodes">
    <h1>Episodes for {{ this.n }} Season {{ this.s }}</h1>
    <div class="collection">
      <Router-link
        v-for="episode in episodes"
        v-bind:key="episode"
        class="collection-item blue-grey darken-4"
        :to="{ path: 'video', query: { n: n, s: s, e: episode } }"
      >Episode: {{ episode }}</Router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Episodes",
  data() {
    return {
      episodes: [],
      n: this.$route.query.n,
      s: this.$route.query.s
    };
  },
  created() {
    axios
      .get(`/api/episodes?n=${this.n}&s=${this.s}`)
      .then(res => (this.episodes = res.data.map(e => e.split(".")[0])));
  }
};
</script>

<style scoped>
.episodes {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
