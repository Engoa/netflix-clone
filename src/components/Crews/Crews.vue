<template>
  <div class="container">
    <Carousel
      isCrew
      :data="crewData"
      :subheader="{ text: 'meet your crew', index: '02' }"
    />
  </div>
</template>

<script>
import crewJSON from "../../assets/jsons/crew.json";
import Carousel from "../Carousel/Carousel.vue";

export default {
  components: { Carousel },
  name: "Crews",
  data: () => ({
    crewData: crewJSON,
  }),
};
</script>
