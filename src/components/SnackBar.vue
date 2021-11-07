<template>
  <v-snackbar v-model="snackbar" timeout="1500" height="50">
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
.v-snack__wrapper {
  background: rgba(0, 0, 0, 0.877) !important;
  padding: 1rem !important;
  .v-snack__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    opacity: 0.85;
    font-family: var(--ff-header) !important;
    font-size: 0.95rem;
    font-weight: bold !important;
  }
  .v-icon {
    color: var(--red);
  }
}
.v-application .snack-text {
  margin: 0 !important;
}
</style>
