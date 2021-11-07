<template>
  <div
    v-if="userData.email"
    class="slider"
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0, 0.05, 0.1],
      },
    }"
  >
    <div v-if="error" class="error-wrapper api__error">
      <h2>Error fetching data, Please try again later...</h2>
    </div>
    <div class="slider__wrapper">
      <NavigationArrows :classes="navigationElements" />
      <span class="slider__header">{{ title }}</span>
      <Swiper :options="swiperOptions" @slide-change="handleSwipe">
        <SwiperSlide
          v-for="(movie, index) in data || apiData"
          :key="movie.title + index"
        >
          <v-card class="slider__movie" @click="OPEN_VIDEO(movie.id)">
            <v-img
              :src="`${
                movie.poster_path === null
                  ? 'https://wallpaperaccess.com/full/2772922.png'
                  : `https://image.tmdb.org/t/p/original${movie.poster_path}`
              }`"
              :alt="movie.title"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-icon
              active-class="no-active"
              class="add__btn card__buttons"
              @click.stop="addToList(movie.id)"
              >fas fa-plus</v-icon
            >
            <v-icon
              active-class="no-active"
              class="delete__btn card__buttons"
              @click.stop="deleteFromList(index)"
              >fas fa-times</v-icon
            >
          </v-card>
        </SwiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </Swiper>
    </div>
  </div>
</template>

<script>
import NetflixService from "../../services/NetflixService";
import debounce from "lodash/debounce";
import NavigationArrows from "../NavigationArrows/NavigationArrows.vue";
import { mapActions } from "vuex";
import "./NetflixRow.scss";

export default {
  components: { NavigationArrows },
  name: "NetflixRow",
  props: {
    queryString: String,
    title: String,
    data: null,
    currentPage: {
      type: Number,
      default: 1,
    },
  },

  data: (vm) => ({
    apiData: [],
    totalPages: 1,
    loading: false,
    isIntersected: false,
    isOpen: false,
    error: false,
    rowPage: 1,

    navigationElements: {
      prev: "prev__" + vm.generateRandomString(),
      next: "next__" + vm.generateRandomString(),
    },
    debouncedFetchData: null,
  }),

  created() {
    this.debouncedFetchData = debounce(this.fetchData, 150);
  },

  computed: {
    swiperOptions() {
      return {
        parallax: true,
        spaceBetween: 8,
        longSwipesMs: 50,
        longSwipesRatio: 0.1,
        observer: true,
        passiveListeners: true,
        navigation: {
          nextEl: "." + this.navigationElements.next,
          prevEl: "." + this.navigationElements.prev,
        },

        breakpoints: {
          315: {
            slidesPerView: 2.5,
          },
          640: {
            slidesPerView: 4.5,
          },
          968: {
            slidesPerView: 4.5,
          },
          1440: {
            slidesPerView: 5,
          },
          1850: {
            slidesPerView: 6.5,
          },
        },
      };
    },
  },

  methods: {
    ...mapActions({
      addList: "mylist/addList",
      removeFromlist: "mylist/removeFromlist",
    }),

    deleteFromList(index) {
      setTimeout(() => {
        this.removeFromlist(index);
        this.$root.$emit("snackbar", {
          text: `Movie successfully deleted from list! Movies: ${this.myList.length}`,
          icon: "fas fa-check",
        });
      }, 100);
    },

    onIntersect(entries) {
      if (!this.isIntersected && entries[0].isIntersecting) {
        this.isIntersected = true;
        this.debouncedFetchData();
      }
    },

    async fetchData() {
      try {
        this.loading = true;
        const response = await NetflixService.discoverMovies(
          this.queryString,
          this.currentPage
        );
        this.totalPages = response.total_pages;
        this.apiData = this.apiData.concat(response.results);
      } catch (error) {
        console.log(error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    handleSwipe(event) {
      const realIndex = event.realIndex;
      const perView = event.params.slidesPerView;
      const isAtEnd = this.apiData.length - realIndex <= perView;
      if (isAtEnd && !this.loading && this.rowPage <= this.totalPages) {
        this.rowPage++;
        this.debouncedFetchData();
      }
    },
  },
};
</script>
