<template>
  <header class="hero">
    <Swiper :options="swiperOptions">
      <SwiperSlide v-for="movie in apiData" :key="movie.id + 'hero'">
        <FeaturedMovie :data="movie" />
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
      } catch {
        console.log("Error fetching API");
      }
    },
  },
};
</script>
