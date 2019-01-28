<template>
  <div class="seasons">
    <h1>Seasons for {{ this.n }}</h1>
    <div class="collection">
      <Router-link
        v-for="season in seasons"
        v-bind:key="season"
        class="collection-item blue-grey darken-4"
        :to="{ path: 'episodes', query: { n: n, s: season }}"
      >Season: {{ season }}</Router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Seasons",
  data() {
    return {
      seasons: [],
      n: this.$route.query.n
    };
  },
  created() {
    axios
      .get(`/api/seasons?n=${this.n}`)
      .then(res => (this.seasons = res.data));
  }
};
</script>

<style scoped>
.seasons {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
