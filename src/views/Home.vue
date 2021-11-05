<template>
  <div>
    <HeroSwiper />
    <v-main :style="{ marginTop: '-20vmin' }">
      <NetflixRow
        :data="myList"
        title="My List"
        v-if="myList.length"
        class="mylist"
      />
      <NetflixRow
        v-for="(item, index) in apiRows"
        :title="item.title"
        :key="item.title + index"
        :queryString="item.queryString"
      />
    </v-main>
  </div>
</template>

<script>
import capitalize from "lodash/capitalize";
import NetflixRow from "../components/NetflixRow/NetflixRow.vue";
import HeroSwiper from "../components/HeroSwiper/HeroSwiper.vue";
import { mapActions } from "vuex";

export default {
  components: { NetflixRow, HeroSwiper },
  name: "Home",
  methods: {
    ...mapActions({
      setMyList: "mylist/setMyList",
    }),
  },

  computed: {
    apiRows() {
      return [
        {
          queryString: "&vote_count.gte=12000",
          title: capitalize("Highest rated"),
        },
        {
          queryString: "&year=2000",
          title: capitalize("Oldies but a goodies"),
        },

        ...Object.entries(this.MOVIEDB_GENERES).map(([value, key]) => ({
          queryString: "with_genres=" + value,
          title: capitalize(key) + " Movies",
        })),
      ];
    },
  },

  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0); // Force scroll to top on load
    }, 700);

    // Check for list
    const myListLS = JSON.parse(localStorage.getItem("mylist"));
    if (myListLS) {
      this.setMyList(myListLS);
    }
  },
};
</script>
