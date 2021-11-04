<template>
  <v-app>
    <Navbar v-if="userData.email" />
    <MovieModal v-model="videoModalOpen" />
    <router-view />
  </v-app>
</template>

<script>
import MovieModal from "./components/MovieModal/MovieModal";
import Navbar from "./components/Navbar/Navbar";
import { mapActions } from "vuex";

export default {
  components: { Navbar, MovieModal },
  name: "App",

  data: () => ({
    videoModalOpen: false,
  }),

  methods: {
    ...mapActions({
      setUserData: "user/setUserData",
    }),
  },

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

  mounted() {
    // Check for user
    const LSuser = JSON.parse(localStorage.getItem("user"));
    if (LSuser) {
      this.setUserData(LSuser);
    }
    if (!LSuser && this.$route.name === "Home") {
      this.$router.replace("/login");
    }
    if (
      (LSuser && this.$route.name === "Login") ||
      (LSuser && this.$route.name === "Register")
    ) {
      console.log(this.$route.name);
      this.$router.replace("/");
    }
  },
};
</script>
