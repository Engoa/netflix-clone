<template>
  <div class="container">
    <Carousel
      :data="technologyData"
      :subheader="{ text: 'space launch 101', index: '03' }"
    />
  </div>
</template>

<script>
import technologyJSON from "../../assets/jsons/technology.json";
import Carousel from "../Carousel/Carousel.vue";

export default {
  name: "Technologies",
  components: { Carousel },
  data: () => ({
    technologyData: technologyJSON,
  }),
};
</script>
