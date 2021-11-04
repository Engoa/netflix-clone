import { mapGetters } from "vuex";

export default {
  data: () => ({
    myArray: [],
  }),
  computed: {
    ...mapGetters({
      netflixData: "netflix/getNetflixData",
      movieId: "netflix/getMovieById",
      getUser: "netflix/getUserData",
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
    setLS(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getLS(value) {
      localStorage.getItem(value);
    },

    generateRandomString(length = 5) {
      return Math.random().toString(36).substring(length);
    },

    OPEN_VIDEO(vid) {
      this.$router.push({ query: { vid } });
    },
    // ADD_TO_LIST(obj) {
    //   this.myArray.push(obj);
    //   console.log(this.myArray);
    // },
  },
};
