<template>
  <v-app>
    <Navbar v-if="userData.email" />
    <MovieModal v-model="videoModalOpen" />
    <SnackBar />
    <GoToTopBtn />
    <router-view />
  </v-app>
</template>

<script>
import MovieModal from "./components/MovieModal/MovieModal";
import Navbar from "./components/Navbar/Navbar";
import SnackBar from "./components/SnackBar";
import { mapActions } from "vuex";
import GoToTopBtn from "./components/GoToTopBtn.vue";

export default {
  components: { Navbar, MovieModal, SnackBar, GoToTopBtn },
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
      const arrows = document.querySelectorAll(".nav-arrows");
      if (isOpen) {
        arrows.forEach((arrow) => {
          arrow.style.display = "none";
        });
      } else {
        arrows.forEach((arrow) => {
          arrow.style.display = "flex ";
        });
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.$vuetify.goTo(0);
    }, 1000);
    // Check for user
    setTimeout(() => {
      const LSuser = JSON.parse(localStorage.getItem("user"));
      if (LSuser) {
        this.setUserData(LSuser);
      }
      if (
        (!LSuser && this.$route.name === "Home") ||
        (!LSuser && this.$route.name === "Genre") ||
        (!LSuser && this.$route.name === "Genres")
      ) {
        this.$router.replace("/login");
      }
      if (
        (LSuser && this.$route.name === "Login") ||
        (LSuser && this.$route.name === "Register")
      ) {
        this.$router.replace("/");
      }
    }, 100);
  },
};
</script>
