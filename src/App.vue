<template>
  <v-app>
    <BackgroundImages />
    <nav>
      <Navbar />
    </nav>
    <!-- Render anim if in desktop, none on mobile -->
    <v-scroll-x-reverse-transition
      leave-absolute
      v-if="!$vuetify.breakpoint.mobile"
      mode="out-in"
    >
      <router-view />
    </v-scroll-x-reverse-transition>
    <router-view v-if="$vuetify.breakpoint.mobile" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import BackgroundImages from "./components/UI/BackgroundImages/BackgroundImages.vue";
export default {
  components: { Navbar, BackgroundImages },
  name: "App",

  data: () => ({}),
};
</script>
