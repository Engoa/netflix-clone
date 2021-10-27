<template>
  <div class="carousel">
      <SubHeader :text="subheader.text" :index="subheader.index" />
    <div class="carousel__right">
      <v-img
        :class="isCrew ? 'crew-image' : 'tech-image'"
        :src="
          getImageUrl(
            isCrew ? data[carousel].webp : data[carousel].images.portrait
          )
        "
        transition="scale-transition"
        :key="carousel + 'carousel'"
      />
      <div class="grey-bar">
        <div class="grey-line"></div>
      </div>
    </div>
    <div class="carousel__left">
      <v-carousel
        v-model="carousel"
        :show-arrows="false"
        dark
        hide-delimiter-background
        :height="$vuetify.breakpoint.mobile ? '280' : '320'"
      >
        <CarouselItem
          v-for="(item, index) in data"
          eager
          exact-active-class="active-carousel"
          :key="item.name + index"
          transition="fade-transition"
          :item="item"
          :isCrew="isCrew"
        />
      </v-carousel>
    </div>
  </div>
</template>

<script>
import SubHeader from "../UI/SubHeader/SubHeader.vue";
import CarouselItem from "./CarouselItem.vue";
import "./Carousel.scss";

export default {
  components: { SubHeader, CarouselItem },
  name: "Carousel",
  data: () => ({
    carousel: 0,
  }),
  props: {
    data: null,
    image: String,
    isCrew: Boolean,
    subheader: {
      text: String,
      index: String,
    },
  },
};
</script>
