<template>
  <v-dialog
    v-model="showPopup"
    content-class="movie-modal"
    transition="dialog-bottom-transition"
    :fullscreen="false"
  >
    <div class="movie-modal__top" v-if="movie">
      <div class="movie-modal__close">
        <v-icon @click="$emit('onClose')">fas fa-times</v-icon>
      </div>
      <div class="movie-modal__link">
        <a :href="movie.homepage" target="_blank">
          <v-btn text fab small>
            <v-icon> fas fa-link </v-icon>
          </v-btn>
        </a>
      </div>
    </div>
    <div class="error--wrapper" v-if="error">
      <v-img src="https://wallpaperaccess.com/full/2772922.png"></v-img>
      <div class="error--wrapper__text">
        <Fitty :minSize="20" :maxSize="20" multiLine tag="h4">
          Error fetching data, please try again later!
        </Fitty>
      </div>
    </div>
    <!-- // TODO: find better name ya asshole -->
    <div class="data" v-if="movie">
      <div class="movie-modal__image--poster">
        <v-img
          class="poster-image"
          :src="`${
            movie.poster_path === null
              ? 'https://wallpaperaccess.com/full/2772922.png'
              : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          }`"
          :alt="movie.title"
        >
        </v-img>
      </div>
      <div class="movie-modal__image--backdrop">
        <v-img
          :src="`${
            movie.backdrop_path === null
              ? 'https://wallpaperaccess.com/full/52448.jpg'
              : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
          }`"
        >
        </v-img>
      </div>
      <div class="movie-modal__information">
        <div class="movie-modal__information--name">
          <Fitty :minSize="20" :maxSize="70" multiLine tag="h4">
            {{ movie.title || movie.name }}
          </Fitty>
        </div>
        <div class="movie-modal__information--data">
          <span>{{ movie.vote_count }} votes</span>
          <template>
            <span v-if="movie.release_date">{{
              movie.release_date.split("-")[0]
            }}</span>
            <span v-else>Unknown Date</span>
          </template>
          <span>{{ !movie.media_type ? "Movie" : movie.media_type }}</span>
          <span> {{ movie.adult ? "16+" : "12+" }}</span>
          <span>HD</span>
          <span>5.1</span>
        </div>
        <div class="movie-modal__information--genres">
          <span>
            {{ movie.genres.map((item) => item.name).join(", ") }}
          </span>
        </div>

        <div class="movie-modal__information--data2">
          <span>
            {{
              movie.spoken_languages
                .map((item) => item.english_name)
                .join(", ") + ",  "
            }}
          </span>
          <span> {{ movie.runtime }} Minutes</span>
        </div>
        <div class="movie-modal__information--budget">
          <span> {{ movie.budget }} Dollars </span>
        </div>
        <div class="movie-modal__information--overview">
          <p>
            <VClamp :max-lines="4" autoresize>
              {{ movie.overview }}
            </VClamp>
          </p>
        </div>
      </div>
      <div class="movie-modal__video">
        <youtube
          :player-vars="playerVars"
          :video-id="returnMovieUrl"
          ref="youtube"
        ></youtube>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import "./MovieModal.scss";
import VClamp from "vue-clamp";
import NetflixService from "../../services/NetflixService";
import Fitty from "@/components/Fitty";

export default {
  name: "MovieModal",
  components: { VClamp, Fitty },

  model: {
    event: "onClose",
  },

  props: {
    value: Boolean,
  },

  data: () => ({
    movie: null,
    movievideo: null,
    error: false,

    playerVars: {
      autoplay: 0,
      controls: 1,
      resize: true,
      origin: "http://localhost:8080",
      autoHide: true,
    },
  }),

  computed: {
    id() {
      return this.$route.query.vid;
    },
    showPopup: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("onClose", value);
      },
    },
    returnMovieUrl() {
      return this.movievideo.results
        .filter((item) => item.type === "Trailer")
        .map((item) => item.key)[0];
    },
  },

  methods: {
    async FetchById() {
      try {
        const response = await NetflixService.searchMovieByID(this.id);
        const responseForVideo = await NetflixService.searchMovieByIDForVideo(
          this.id
        );
        this.movie = response;
        this.movievideo = responseForVideo;
        this.error = false;
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
  },

  mounted() {
    // Checks if url starts with movie query, if so give me the data (Fixes issue with no data on refresh!)
    if (this.id) {
      this.FetchById();
    }
  },

  watch: {
    id(value) {
      if (!value) {
        this.movie = null;
      } else {
        this.FetchById();
      }
    },
  },
};
</script>
