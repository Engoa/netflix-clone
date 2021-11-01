<template>
  <v-dialog v-model="showPopup" content-class="movie-modal">
    <div class="movie-modal__close">
      <v-icon @click="$emit('onClose')"> fas fa-times </v-icon>
    </div>
    <div class="data" v-for="movie in currentMovie" :key="movie.title">
      <div class="movie-modal__image--poster">
        <v-img
          class="poster-image"
          :src="`${
            movie.poster_path === null
              ? 'https://wallpaperaccess.com/full/2772922.png'
              : `https://image.tmdb.org/t/p/original${movie.poster_path}`
          }`"
          :alt="movie.title"
        >
        </v-img>
      </div>
      <div class="movie-modal__image--backdrop">
        <v-img
          :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
          :alt="movie.title"
        >
        </v-img>
      </div>
      <div class="movie-modal__information">
        <div class="movie-modal__information--name">
          <h4>{{ movie.title }}</h4>
        </div>
        <div class="movie-modal__information--data">
          <span>{{ movie.vote_count }} votes</span>
          <span>{{ movie.release_date }}</span>
          <span>{{ movie.media_type }}</span>
          <span> {{ movie.adult ? "16+" : "12+" }}</span>
          <span>HD</span>
          <span>5.1</span>
        </div>
        <div class="movie-modal__information--genres">
          <span>
            {{ movie.genre_ids }}
          </span>
        </div>
        <div class="movie-modal__information--overview">
          <p>
            <VClamp :max-lines="3" autoresize>
              {{ movie.overview }}
            </VClamp>
          </p>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import VClamp from "vue-clamp";
import "./MovieModal.scss";
export default {
  name: "MovieModal",
  components: { VClamp },

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
