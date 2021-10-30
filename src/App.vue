<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",

  data: () => ({
    //api.themoviedb.org/3/movie/550?api_key=aaf4434aae80f32eb7c2bbbc9ff754e8
    url: "api.themoviedb.org/3/discover/movie?api_key=aaf4434aae80f32eb7c2bbbc9ff754e8",
    API_KEY: "aaf4434aae80f32eb7c2bbbc9ff754e8",
    movies: [],
  }),
};
</script>
<style lang="scss">
#app {
  background-color: var(--v-background-base);
  height: 3000px;
}
</style>
