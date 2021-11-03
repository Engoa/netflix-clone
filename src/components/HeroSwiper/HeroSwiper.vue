<template>
  <header class="hero">
    <Swiper :options="swiperOptions">
      <SwiperSlide v-for="movie in apiData" :key="movie.id + 'hero'">
        <div @click="OPEN_VIDEO(movie.id)">
          <FeaturedMovie :data="movie" />
        </div>
      </SwiperSlide>
    </Swiper>
    <NavigationArrows :classes="navClasses" />
  </header>
</template>

<script>
import NetflixService from "../../services/NetflixService";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie.vue";
import NavigationArrows from "../NavigationArrows/NavigationArrows.vue";

import "./HeroSwiper.scss";

export default {
  name: "HeroSwiper",

  components: { FeaturedMovie, NavigationArrows },

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
        speed: 800,
        slidesPerView: 1,
        navigation: {
          nextEl: "." + this.navClasses.next,
          prevEl: "." + this.navClasses.prev,
        },
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
  },
};
</script>
