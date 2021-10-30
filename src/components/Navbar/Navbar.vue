<template>
  <nav :class="['nav', { 'nav--active': navActive }]">
    <div class="nav__left">
      <v-icon class="nav__left__hamburger">fas fa-bars</v-icon>
      <v-img
        class="nav__left__logo"
        src="../../assets/images/netflix-logo.png"
      />
      <div class="nav__right">
        <v-icon class="nav__right__search">fas fa-search</v-icon>
        <v-icon class="nav__right__settings">fas fa-ellipsis-h</v-icon>
      </div>
    </div>
  </nav>
</template>

<script>
import "./Navbar.scss";
export default {
  name: "Navbar",
  data: () => ({
    scrollPosition: 0,
    navActive: false,
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 60) {
        this.navActive = true;
      } else {
        this.navActive = false;
      }
    },
  },

  created() {
    document.addEventListener("scroll", this.updateScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.updateScroll);
  },
};
</script>
