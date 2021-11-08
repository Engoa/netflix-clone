<template>
  <v-snackbar v-model="snackbar" timeout="2000" height="50">
    <p class="snack-text">{{ config.text }}</p>
    <v-icon>
      {{ config.icon }}
    </v-icon>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",

  data: () => ({
    snackbar: false,
    config: {},
  }),

  mounted() {
    this.$root.$on("snackbar", this.openSnackbar);
  },

  beforeDestroy() {
    this.$root.$off("snackbar", this.openSnackbar);
  },

  methods: {
    openSnackbar(config) {
      this.snackbar = true;
      this.config = config;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/import.scss";

.v-snack__wrapper {
  background: rgba(0, 0, 0, 0.877) !important;

  @include media("<tablet") {
    margin: 0 !important;
    width: 100%;
    border-radius: 0 !important;
  }
  .v-snack__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    opacity: 0.85;
    font-family: var(--ff-header) !important;
    font-size: 1rem;
    font-size: clamp(0.85rem, 3vw, 1rem);
    font-weight: bold !important;
    padding: 1rem !important;
  }
  .v-icon {
    color: var(--red);
  }
}
.v-application .snack-text {
  margin: 0 !important;
}
</style>
