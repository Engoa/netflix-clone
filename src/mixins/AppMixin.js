import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      netflixData: "netflix/getNetflixData",
      movieId: "netflix/getMovieById",
      currentMovie: "netflix/getCurrentMovie",
    }),

    MOVIEDB_GENERES() {
      return {
        28: "action",
        12: "adventure",
        80: "crime",
        14: "fantasy",
        16: "animation",
        18: "drama",
        27: "horror",
        35: "comedy",
        36: "history",
        53: "thriller",
        99: "documentary",
        10752: "war",
      };
    },
  },

  methods: {
    generateRandomString(length = 5) {
      return Math.random().toString(36).substring(length);
    },
  },
};
