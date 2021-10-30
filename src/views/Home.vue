<template>
  <div>
    <FeaturedMovie />
    <Slide />
  </div>
</template>

<script>
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie.vue";
import Slide from "../components/Slide/Slide.vue";
export default {
  components: { FeaturedMovie, Slide },
  name: "Home",
};
</script>
