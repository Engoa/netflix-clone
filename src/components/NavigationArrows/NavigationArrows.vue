<template>
  <div ref="navarrows" class="nav-arrows">
    <div class="nav-arrows-item" :class="classes.prev">
      <v-icon>fas fa-chevron-left</v-icon>
    </div>
    <div class="nav-arrows-item" :class="classes.next">
      <v-icon>fas fa-chevron-right</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: Object,
      default: () => ({ prev: "nav-arrows__prev", next: "nav-arrows__next" }),
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/import.scss";

.nav-arrows {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
  pointer-events: none;

  &-item {
    pointer-events: all;
    z-index: 10;
    background-color: var(--light-grey);
    width: 50px;
    transition: $transition-350;

    @include flexCenter;

    @include media("<tablet") {
      width: 25px;
    }
    &:hover {
      background-color: var(--dark-grey);
    }
    .v-icon {
      height: 100% !important;
      width: 40px !important;
      pointer-events: none;
    }
    &.swiper-button-disabled {
      opacity: 0;
    }

    &-item:first-child {
      padding-left: 1rem;
    }
    &-item:last-child {
      padding-right: 1rem;
    }
  }
}
</style>
