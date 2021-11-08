<template>
  <div>
    <div v-if="error" class="error-wrapper api__error">
      <h2>Error fetching data, Please try again later...</h2>
    </div>
    <div class="movie-grid" v-if="!error">
      <div
        class="movie-grid__images"
        v-for="(movie, index) in genreData"
        :key="movie.poster_path + index"
      >
        <v-card
          v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.05, 0.1],
            },
          }"
          class="slider__movie"
          @click="OPEN_VIDEO(movie.id)"
          :title="movie.title"
        >
          <v-img
            width="200"
            :src="`${
              movie.poster_path === null ||
              movie.poster_path === '' ||
              !movie.poster_path
                ? 'https://wallpaperaccess.com/full/2772922.png'
                : `https://image.tmdb.org/t/p/original${movie.poster_path}`
            }`"
            :alt="movie.title"
          >
            <template v-slot:placeholder>
              <v-row class="card-loading">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import NetflixService from "../../services/NetflixService";
import debounce from "lodash/debounce";
import "./MoviesGrid.scss";

export default {
  name: "MoviesGrid",
  data: () => ({
    error: false,
    debouncedGenreData: null,
    currentGenrePage: 1,
    scrolledToBottom: false,
    genreData: [],
    isIntersected: false,
  }),

  props: {
    queryString: String,
  },

  created() {
    this.debouncedGenreData = debounce(this.fetchData, 300);
  },

  methods: {
    onIntersect(entries) {
      if (!this.isIntersected && entries[0].isIntersecting) {
        this.isIntersected = true;
        this.debouncedGenreData();
      }
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.scrolledToBottom = true;
          this.currentGenrePage++;
          this.debouncedGenreData();
        }
      };
    },
    async fetchData() {
      try {
        const response = await NetflixService.discoverMovies(
          this.queryString,
          this.currentGenrePage
        );
        this.totalPages = response.total_pages;
        this.genreData = this.genreData.concat(response.results);
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
  },
  mounted() {
    this.scroll();
    this.debouncedGenreData();
  },
};
</script>
