<template>
  <div class="bg">
    <img draggable="false" class="bg-mobile" :src="getImageUrl(`background-${getImageNameByRoute}-mobile.jpg`)" />
    <img draggable="false" class="bg-tablet" :src="getImageUrl(`background-${getImageNameByRoute}-tablet.jpg`)" />
    <img draggable="false" class="bg-desktop" :src="getImageUrl(`background-${getImageNameByRoute}-desktop.jpg`)" />
  </div>
</template>

<script>
import "./BackgroundImages.scss";
export default {
  name: "BackgroundImages",

  data: () => ({
    imagePath: "",
  }),
  computed: {
    getImageNameByRoute() {
      switch (this.$route.name) {
        case "Home":
          return "home";
        case "Destination":
          return "destination";
        case "Crew":
          return "crew";
        case "Technology":
          return "technology";
        default:
          "";
      }
      return this.$route.name;
    },
  },
};
</script>
