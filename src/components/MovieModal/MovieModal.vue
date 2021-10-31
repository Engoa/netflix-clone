<template>
  <v-dialog v-model="showPopup" max-width="600px" content-class="movie-modal">
    <div class="data" v-for="item in currentMovie" :key="item.title">
      <h5>{{ item.title }}</h5>

    </div>
    <v-btn color="blue darken-1" text @click="$emit('onClose')"> Close </v-btn>
    <v-btn color="blue darken-1" text @click="$emit('onClose')"> Save </v-btn>
  </v-dialog>
</template>

<script>
export default {
  name: "MovieModal",

  props: {
    isOpen: Boolean,
  },

  computed: {
    showPopup: {
      get() {
        return this.isOpen;
      },
      set(isOpen) {
        this.$emit("onClose", isOpen);
      },
    },
  },
};
</script>
<style lang="scss">
.movie-modal {
  background: black;
  color: white;
}
</style>
