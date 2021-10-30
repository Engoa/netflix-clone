<template>
  <div class="slider">
    <span class="slider__header">{{ text }}</span>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in data" :key="item.title"
        ><v-img
          :data-id="index"
          :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`"
          alt="Movie Image"
        ></v-img>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "./Slides.scss";

export default {
  name: "Slide",

  props: {
    data: Array,
    text: String,
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 8,
        navigation: "true",
        breakpoints: {
          315: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 9,
          },
        },
      },
    };
  },
};
</script>
