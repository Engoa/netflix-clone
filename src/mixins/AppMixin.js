import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ netflixData: "netflix/getNetflixData" }),
  },
};
