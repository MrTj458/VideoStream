<template>
  <div class="home">
    <h1>Shows</h1>
    <div class="collection">
      <Router-link
        v-for="show in shows"
        v-bind:key="show"
        class="collection-item blue-grey darken-4"
        :to="{ path: 'seasons', query: { n: show }}"
      >{{ show }}</Router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      shows: []
    };
  },
  methods: {},
  created() {
    axios.get("/api/shows").then(res => (this.shows = res.data));
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
