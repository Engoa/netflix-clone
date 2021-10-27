<template>
  <!-- :key is needed with the current route name for v-image to re-render -->
  <div class="bg">
    <v-img
      draggable="false"
      :src="getImageSrcByDevice"
      transition="scroll-y-transition"
      :key="$route.name"
      class="bg-image"
    ></v-img>
  </div>
</template>

<script>
import "./BackgroundImages.scss";
import gsap from "gsap";

export default {
  name: "BackgroundImages",

  data: () => ({}),

  computed: {
    getImageSrcByDevice() {
      const img = (size) => {
        return this.getImageUrl(
          `background-${this.$route.meta.name}-${size}.jpg`
        );
      };

      switch (true) {
        case this.$vuetify.breakpoint.lgAndUp:
          return img("desktop");

        case this.$vuetify.breakpoint.lgAndDown &&
          this.$vuetify.breakpoint.mdAndUp:
          return img("tablet");

        case this.$vuetify.breakpoint.mobile:
          return img("mobile");

        default:
          return img("desktop");
      }
    },
  },
};
</script>
