<template>
  <div
    @click.stop="scrollToTop"
    :class="['gtp-wrapper', { 'gtp-active': goToTopBtnActive }]"
  >
    <v-icon>fas fa-arrow-up</v-icon>
  </div>
</template>

<script>
export default {
  name: "GoToTopBtn",
  data: () => ({
    goToTopBtnActive: false,
  }),

  methods: {
    scrollToTop() {
      setTimeout(() => {
        this.$vuetify.goTo(0);
      }, 250);
    },
  },

  watch: {
    "$app.scrollPos": function (val) {
      this.goToTopBtnActive = val > 3000;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/import.scss";

.gtp-wrapper {
  position: fixed;
  bottom: 1.5rem;
  right: 4rem;
  z-index: 10;
  cursor: pointer;
  border-radius: 50%;
  background-color: black;
  width: 35px;
  height: 35px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: $transition-350;
  will-change: transform;
  opacity: 0;
  visibility: hidden;

  @include media("<tablet") {
    bottom: 1rem;
    right: 2rem;
  }
  .v-icon {
    transition: $transition-250;
    color: var(--red) !important;
    font-size: 1.1rem !important;
  }
  &:hover,
  &:active {
    .v-icon {
      transform: translateY(-3px);
    }
  }
}

.gtp-active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
</style>
