<template>
  <header class="hero">
    <Swiper :options="swiperOptions">
      <SwiperSlide v-for="movie in apiData" :key="movie.id + 'hero'">
        <div @click="openModal(movie.id)">
          <FeaturedMovie :data="movie" />
        </div>
      </SwiperSlide>
    </Swiper>
    <NavigationArrows :classes="navClasses" />
    <MovieModal :isOpen="isOpen" @onClose="closeModal" />
  </header>
</template>

<script>
import NetflixService from "../../services/NetflixService";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie.vue";
import NavigationArrows from "../NavigationArrows/NavigationArrows.vue";
import MovieModal from "../MovieModal/MovieModal.vue";
import { mapActions } from "vuex";

import "./HeroSwiper.scss";

export default {
  name: "HeroSwiper",

  components: { FeaturedMovie, NavigationArrows, MovieModal },

  data: () => ({
    apiData: null,
    isOpen: false,
  }),

  created() {
    this.fetchData();
  },

  computed: {
    navClasses() {
      return {
        next: "hero__nav__next",
        prev: "hero__nav__prev",
      };
    },
    swiperOptions() {
      return {
        parallax: true,
        grabCursor: true,
        speed: 1000,
        navigation: {
          nextEl: "." + this.navClasses.next,
          prevEl: "." + this.navClasses.prev,
        },
        slidesPerView: 1,
      };
    },
  },

  methods: {
    async fetchData() {
      try {
        const response = await NetflixService.trendingLastDays();
        this.apiData = response.results;
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions({
      setCurrentMovieById: "netflix/setCurrentMovieById",
    }),

    addHashToLocation(params) {
      history.pushState(
        {},
        null,
        this.$route.path + "#" + encodeURIComponent(params)
      );
    },

    openModal(id) {
      const movie = this.movieId(id); // get movie by id
      this.setCurrentMovieById(movie); // setting the current movie by id
      this.isOpen = true;
      // this.$router.push("/movie/" + id);
      // console.log(this.id);
    },

    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>
