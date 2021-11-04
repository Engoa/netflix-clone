<template>
  <div class="featured-movie">
    <div class="featured-movie__image">
      <v-img
        data-swiper-parallax="600"
        data-swiper-parallax-scale="1.8"
        :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
      />
    </div>
    <div class="featured-movie__data">
      <div
        class="featured-movie__title"
        data-swiper-parallax="-100"
        data-swiper-parallax-duration="1400"
        data-swiper-parallax-opacity="0"
      >
        <h1 ref="headline">{{ movie.title || movie.name }}</h1>
      </div>
      <div
        class="featured-movie__buttons"
        data-swiper-parallax="-200"
        data-swiper-parallax-duration="1300"
        data-swiper-parallax-opacity="0"
      >
        <v-btn elevation="0.1" @click="OPEN_VIDEO(movie.id)"
          ><v-icon>fas fa-play</v-icon>Play</v-btn
        >
        <v-btn elevation="0.1" @click.stop="addToList(movie.id)"
          ><v-icon> fas fa-plus</v-icon>My List</v-btn
        >
      </div>
      <div
        class="featured-movie__description"
        data-swiper-parallax="-300"
        data-swiper-parallax-duration="1200"
        data-swiper-parallax-opacity="0"
      >
        <p>
          <VClamp :max-lines="3" autoresize>
            {{ movie.overview }}
          </VClamp>
        </p>
      </div>
      <div class="featured-movie__buttons play-btn">
        <v-btn elevation="0.1" @click="OPEN_VIDEO(movie.id)"
          ><v-icon> fas fa-play</v-icon>Play</v-btn
        >
      </div>
    </div>
    <div
      class="featured-movie__rating"
      data-swiper-parallax-y="-200"
      data-swiper-parallax-duration="1100"
      data-swiper-parallax-opacity="0"
    >
      <span> {{ !movie.adult ? "12+" : "16+" }}</span>
    </div>
  </div>
</template>

<script>
import VClamp from "vue-clamp";
import fitty from "fitty";
import { mapActions } from "vuex";

import "./FeaturedMovie.scss";
export default {
  name: "FeaturedMovie",
  data: () => ({
    snackbar: {
      active: false,
      message: "",
    },
  }),
  components: {
    VClamp,
  },
  props: {
    movie: null,
  },
  methods: {
    ...mapActions({
      addList: "mylist/addList",
    }),
  },

  mounted() {
    const headline = this.$refs.headline;
    fitty(headline, {
      maxSize: 80,
      minSize: 20,
    });
  },
};
</script>
