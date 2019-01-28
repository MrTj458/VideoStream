<template>
  <div id="app">
    <nav class="blue-grey darken-4">
      <div class="nav-wrapper">
        <router-link class="center brand-logo" to="/">Home</router-link>
        <ul class="left">
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  width: 100%;
}
body {
  background-color: #37474f;
  color: white;
}
.collection {
  width: 25%;
}
a {
  color: white;
  text-decoration: none;
}
</style>
