import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      netflixData: "netflix/getNetflixData",
      movieId: "netflix/getMovieById",
      userData: "user/getUserData",
      myList: "mylist/getMyList",
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

    OPEN_VIDEO(vid) {
      this.$router.push({ query: { vid } });
    },

    addToList(id) {
      if (this.myList.length > 19) {
        this.$root.$emit("snackbar", {
          text: "Oops, reached max limit (20), please remove something in order to add more!",
        });

        return;
      } else {
        this.addList(this.movieId(id));
        this.$root.$emit("snackbar", {
          text: `Movie successfully added to list! Movies: ${this.myList.length}`,
        });

        if (window.scrollY > 450) {
          if (this.$vuetify.breakpoint.width < 768) {
            setTimeout(() => {
              this.$vuetify.goTo(0);
            }, 300);
          } else {
            setTimeout(() => {
              this.$vuetify.goTo(650);
            }, 300);
          }
        }
      }
    },
  },
};
