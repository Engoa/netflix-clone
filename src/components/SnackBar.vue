<template>
  <v-snackbar v-model="snackbar" timeout="1500" height="40">
    <p class="snack-text">{{ config.text }}</p>
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
.v-snack__wrapper {
  background: rgba(0, 0, 0, 0.808) !important;
  width: 100% !important;
  max-width: 200px !important;
  .v-snack__content {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.85;
    font-weight: bold !important;
    font-family: var(--ff-header) !important;
  }
  .v-icon {
    color: var(--red);
  }
}
.v-application .snack-text {
  margin: 0 !important;
}
</style>
