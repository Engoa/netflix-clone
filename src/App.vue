<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar/Navbar.vue";
import axios from "axios";
export default {
  components: { Navbar },
  name: "App",

  data: () => ({
    movies: [],
  }),

  methods: {
    ...mapActions({
      setNetflixData: "netflix/setNetflixData",
    }),
  },

  mounted() {
    if (localStorage.getItem("netflix")) {
      const dataLS = JSON.parse(localStorage.getItem("netflix"));
      this.setNetflixData(dataLS);
      return dataLS;
    } else {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_API}`;
      axios.get(url).then((response) => {
        const result = response.data.results;
        this.setNetflixData(result);
      });
    }
  },
};
</script>
<style lang="scss">
#app {
  background-color: var(--v-background-base);
}
</style>
