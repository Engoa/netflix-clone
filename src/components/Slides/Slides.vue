<template>
  <div class="slider">
    <span class="slider__header">{{ text }}</span>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in data" :key="item.title">
        <div @click="openModal(item.id)">
          <img
            :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`"
            alt="Movie Image"
          />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <MovieModal :isOpen="isOpen" @onClose="closeModal" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MovieModal from "../MovieModal/MovieModal.vue";
import "./Slides.scss";

export default {
  components: { MovieModal },
  name: "Slide",

  props: {
    data: Array,
    text: String,
  },

  data() {
    return {
      isOpen: false,
      swiperOptions: {
        spaceBetween: 8,
        navigation: "true",

        breakpoints: {
          315: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 9,
          },
        },
      },
    };
  },
  methods: {
    ...mapActions({
      setCurrentMovieById: "netflix/setCurrentMovieById",
    }),

    openModal(id) {
      const movie = this.movieId(id); // get movie by id
      this.setCurrentMovieById(movie); // setting the current movie by id
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },

  computed: {
    test() {
      return [
        // {
        //   text: "Recommended For You",
        //   data: Math.max(...this.netflixData.popularity),
        // },
        {
          text: "Thriller Movies",
          data: this.netflixData.filter((item) => item.genre_ids === 53),
        },
        {
          text: "Comedy Movies",
          data: this.netflixData.filter((item) => item.genre_ids === 35),
        },
      ];
    },
  },

  mounted() {
    console.log([
      // {
      //   text: "Recommended For You",
      //   data: Math.max(...this.netflixData.popularity),
      // },
      // {
      //   text: "Thriller Movies",
      //   data: this.netflixData
      //     .map((item) => item?.genre_ids)
      // },
      // {
      //   text: "Comedy Movies",
      //   data: this.netflixData.filter((item) => item.genre_ids === 35),
      // },
    ]);
  },

  // created() {
  //   debugger;
  //   console.log(this.test);
  // },
};
</script>
