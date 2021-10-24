<template>
  <div class="body">
    <BackgroundImages />
    <Destinations />
  </div>
</template>

<script>
import Destinations from "../components/Destinations/Destinations.vue";
import BackgroundImages from "../components/UI/BackgroundImages/BackgroundImages.vue";
export default {
  components: { Destinations, BackgroundImages },
  name: "Destination",
};
BackgroundImages;
</script>
