<template>
  <div>
    <HeroSwiper />
    <v-main :style="{ marginTop: '-20vmin' }">
      <v-expand-transition group appear eager>
        <MyList />
      </v-expand-transition>

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
import MyList from "../components/MyList.vue";

export default {
  components: { NetflixRow, HeroSwiper, MyList },
  name: "Home",

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
};
</script>
