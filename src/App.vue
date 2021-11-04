<template>
  <v-app>
    <Navbar />
    <MovieModal v-model="videoModalOpen" />
    <router-view />
  </v-app>
</template>

<script>
import MovieModal from "./components/MovieModal/MovieModal";
import Navbar from "./components/Navbar/Navbar";

export default {
  components: { Navbar, MovieModal },
  name: "App",

  data: () => ({
    videoModalOpen: false,
  }),

  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(to) {
        this.videoModalOpen = !!to.query?.vid;
      },
    },

    videoModalOpen(isOpen) {
      if (!isOpen && this.$route.query?.vid) {
        this.$router.push({ query: null });
      }
      const arrows = document.querySelector(".nav-arrows");
      if (isOpen) {
        arrows.style.display = "none";
      } else {
        arrows.style.display = "flex";
      }
    },
  },
};
</script>
