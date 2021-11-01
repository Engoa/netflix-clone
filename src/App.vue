<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",

  data: () => ({}),
};
</script>
<style lang="scss">
#app {
  background-color: var(--v-background-base);
}
</style>
