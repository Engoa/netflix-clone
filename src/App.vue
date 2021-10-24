<template>
  <v-app>
    <nav>
      <Navbar />
    </nav>
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
