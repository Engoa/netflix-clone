<template>
  <div
    class="slider"
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0, 0.05, 0.1],
      },
    }"
  >
    <span class="slider__header">{{ title }}</span>
    <div class="slider__wrapper">
      <NavigationArrows :classes="navigationElements" />
      <Swiper :options="swiperOptions" @slide-change="handleSwipe">
        <SwiperSlide
          v-for="(movie, index) in apiData"
          :key="movie.title + index"
        >
          <v-card class="slider__movie">
            <v-img
              :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
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
import "./NetflixRow.scss";
import NavigationArrows from "../NavigationArrows/NavigationArrows.vue";

export default {
  components: { NavigationArrows },
  name: "NetflixRow",
  props: {
    queryString: String,
    title: String,
  },

  data: (vm) => ({
    apiData: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    isIntersected: false,
    navigationElements: {
      prev: "prev__" + vm.generateRandomString(),
      next: "next__" + vm.generateRandomString(),
    },
    debouncedFetchData: null,
  }),
  created() {
    this.debouncedFetchData = debounce(this.fetchData, 200);
  },
  computed: {
    swiperOptions() {
      return {
        spaceBetween: 8,
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
            slidesPerView: 6.5,
          },
          1440: {
            slidesPerView: 10,
          },
        },
      };
    },
  },
  methods: {
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
      } catch {
        console.log("Error fetching API");
      } finally {
        this.loading = false;
      }
    },
    handleSwipe(event) {
      const realIndex = event.realIndex;
      const perView = event.params.slidesPerView;
      const isAtEnd = this.apiData.length - realIndex <= perView;
      if (isAtEnd && !this.loading && this.currentPage <= this.totalPages) {
        this.currentPage++;
        this.debouncedFetchData();
      }
    },
  },
};
</script>
