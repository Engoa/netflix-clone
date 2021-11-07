<template>
  <div>
    <HeroSwiper />
    <v-main :style="{ marginTop: '-20vmin' }">
      <v-expand-transition group appear eager>
        <MyList />
      </v-expand-transition>
      <h1 class="genre__title">{{ genreTitle }} Movies</h1>
      <div v-for="(item, index) in currentPage" :key="item + index">
        <NetflixRow
          v-for="(item, index) in genreRows"
          :key="item.queryString + index"
          :queryString="item.queryString"
          :currentPage="currentPage"
        />
      </div>
    </v-main>
  </div>
</template>

<script>
import NetflixRow from "../../components/NetflixRow/NetflixRow.vue";
import HeroSwiper from "../../components/HeroSwiper/HeroSwiper.vue";
import MyList from "../../components/MyList.vue";

export default {
  components: { NetflixRow, HeroSwiper, MyList },
  data: () => ({
    currentPage: 1,
    scrolledToBottom: false,
  }),
  methods: {
    // It sets up a listener for scroll events on the window. When the user scrolls to the bottom of the window, the currentPage variable is incremented.

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
          setTimeout(() => {
            this.currentPage++;
          }, 200);
        }
      };
    },
  },
  computed: {
    genreRows() {
      return [
        {
          queryString: "with_genres=" + this.$route.params.slug,
        },
      ];
    },
    genreTitle() {
      return this.MOVIEDB_GENERES[this.$route.params.slug];
    },
  },

  mounted() {
    this.scroll();
  },
};
</script>

<style lang="scss">
.genre__title {
  font-size: 2rem;
  font-size: clamp(1.4rem, 3vw, 2.5rem);
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.05em;
  font-weight: normal;
}
</style>
