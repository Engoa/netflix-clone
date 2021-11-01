<template>
  <div class="featured-movie">
    <div class="featured-movie__image" style="overflow: hidden">
      <v-img
        data-swiper-parallax="500"
        data-swiper-parallax-scale="1.8"
        :src="`https://image.tmdb.org/t/p/original${data.backdrop_path}`"
      />
    </div>
    <div class="featured-movie__data">
      <div
        class="featured-movie__title"
        data-swiper-parallax="-100"
        data-swiper-parallax-duration="1600"
        data-swiper-parallax-opacity="0"
      >
        <h1>{{ data.title || data.name }}</h1>
      </div>
      <div
        class="featured-movie__buttons"
        data-swiper-parallax="-200"
        data-swiper-parallax-duration="1500"
        data-swiper-parallax-opacity="0"
      >
        <v-btn elevation="0.1"><v-icon> fas fa-play</v-icon>Play</v-btn>
        <v-btn elevation="0.1"><v-icon> fas fa-plus</v-icon>My List</v-btn>
      </div>
      <div
        class="featured-movie__description"
        data-swiper-parallax="-300"
        data-swiper-parallax-duration="1400"
        data-swiper-parallax-opacity="0"
      >
        <p>
          <VClamp :max-lines="4" autoresize>
            {{ data.overview }}
          </VClamp>
        </p>
      </div>
    </div>
    <div
      class="featured-movie__rating"
      data-swiper-parallax-y="-400"
      data-swiper-parallax-duration="1300"
      data-swiper-parallax-opacity="0"
    >
      <span> 15+ </span>
    </div>
  </div>
</template>

<script>
import VClamp from "vue-clamp";

import "./FeaturedMovie.scss";
export default {
  name: "FeaturedMovie",
  components: {
    VClamp,
  },
  props: {
    data: null,
  },
};
</script>
