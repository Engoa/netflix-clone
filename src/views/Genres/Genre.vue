<template>
  <div>
    <HeroSwiper />
    <v-main :style="{ marginTop: '-20vmin' }">
      <v-expand-transition group appear eager>
        <MyList />
      </v-expand-transition>
      <h1 class="genre__title">{{ genreTitle }} Movies</h1>
      <MoviesGrid :queryString="queryString" :key="$route.fullPath" />
    </v-main>
  </div>
</template>

<script>
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid.vue";
import HeroSwiper from "../../components/HeroSwiper/HeroSwiper.vue";
import MyList from "../../components/MyList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { MoviesGrid, HeroSwiper, MyList },

  computed: {
    ...mapGetters({
      myList: "mylist/getMyList",
    }),
    queryString() {
      return "with_genres=" + this.$route.params.slug;
    },

    genreTitle() {
      return this.MOVIEDB_GENERES[this.$route.params.slug];
    },
  },

  methods: {
    ...mapActions({
      addList: "mylist/addList",
      removeFromlist: "mylist/removeFromlist",
    }),
  },
};
</script>

<style lang="scss">
.genre__title {
  font-size: 2rem;
  font-size: clamp(1.4rem, 3vw, 2.5rem);
  text-transform: capitalize !important;
  letter-spacing: 0.05em;
  font-weight: normal;
  padding: 0 1rem;
  z-index: 2;
  position: relative;
}
</style>
