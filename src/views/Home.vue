<template>
  <div>
    <FeaturedMovie />
    <Slides text="Recommended for you" :data="netflixData" />
  </div>
</template>

<script>
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie.vue";
import Slides from "../components/Slides/Slides.vue";
export default {
  components: { FeaturedMovie, Slides },
  name: "Home",
  data: () => ({}),
};
</script>
