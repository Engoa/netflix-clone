<template>
  <div>
    <v-icon @click="toggleSearch" class="nav__right__search nav__btn"
      >fas fa-search</v-icon
    >
    <v-dialog
      ref="dialog"
      transition="dialog-top-transition"
      fullscreen
      v-model="dialog"
      attach
      content-class="search__bar--dialog"
    >
      <v-app-bar>
        <v-app-bar-nav-icon small @click="toggleSearch">
          <v-icon>fas fa-times</v-icon>
        </v-app-bar-nav-icon>
        <div class="input__wrapper" v-if="dialog">
          <v-text-field
            @input="debouncedSearchData"
            color="red"
            class="input__wrapper--input"
            background-color="var(--dark-grey)"
            placeholder="Search for a movie"
            v-model="inputValue"
            spellcheck="false"
            autocomplete="off"
            rounded
            autofocus
          ></v-text-field>
        </div>
      </v-app-bar>
      <div class="api__error" v-if="error">
        <h2>Error fetching data, Please try again later...</h2>
      </div>
      <div class="movie-grid" v-if="!error">
        <div
          class="movie-grid__images"
          v-for="(movie, index) in apiData"
          :key="movie.poster_path + index"
        >
          <v-card
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
    </v-dialog>
  </div>
</template>

<script>
import NetflixService from "../../services/NetflixService";
import debounce from "lodash/debounce";
import "./SearchBar.scss";

export default {
  name: "SearchBar",
  data: () => ({
    apiData: [],
    dialog: false,
    queryString: "&query=",
    inputValue: "",
    error: false,
    isOpen: false,
    debouncedSearchData: null,
  }),

  created() {
    this.debouncedSearchData = debounce(this.fetchData, 500);
  },

  methods: {
    async fetchData() {
      if (!this.inputValue) {
        this.apiData = [];
      } else {
        try {
          const response = await NetflixService.searchMovies(
            this.queryString + `${this.inputValue}`
          );
          this.apiData = response.results;
        } catch (error) {
          console.log(error);
          this.error = true;
        }
      }
    },
    toggleSearch() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
