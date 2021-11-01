<template>
  <v-dialog v-model="showPopup" content-class="movie-modal">
    <div class="data" v-for="movie in currentMovie" :key="movie.title">
      <div class="movie-modal__image">
        <v-img
          :src="`${
            movie.poster_path === null
              ? 'https://wallpaperaccess.com/full/2772922.png'
              : `https://image.tmdb.org/t/p/original${movie.poster_path}`
          }`"
          :alt="movie.title"
        >
        </v-img>
      </div>
    </div>
    <v-btn color="blue darken-1" text @click="$emit('onClose')"> Close </v-btn>
  </v-dialog>
</template>

<script>
import "./MovieModal.scss";
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
