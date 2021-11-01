import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      name: "home",
    },
  },

  {
    path: "/genres",
    name: "Genres",
    component: () =>
      import(
        /* webpackChunkName: "genres-chunk" */ "../views/Genres/Genres.vue"
      ),
    children: [
      {
        name: "genre",
        path: ":slug",
        component: () =>
          import(
            /* webpackChunkName: "genre-chunk" */ "../views/Genres/Genre.vue"
          ),
      },
    ],
  },
  // {
  //   path: "/movie",
  //   name: "Movie",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "genres-chunk" */ "../views/Genres/Genres.vue"
  //     ),
  //   children: [
  //     {
  //       name: "movie",
  //       path: ":id",
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "movie-modal-chunk" */ "../components/MovieModal/MovieModal.vue"
  //         ),
  //     },
  //   ],
  // },

  // {
  //   path: "/crew",
  //   name: "Crew",
  //   meta: {
  //     name: "crew",
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "crew-chunk" */ "../views/Crew.vue"),

  // receive id in component: this.$route.params.id
  // push to route with id: this.$router.push({ name:'Name', id })

  // children: {
  //   path: ":id",
  //   name: "Crew",
  //   component: () =>
  //     import(/* webpackChunkName: "crew-chunk" */ "../views/CrewItem.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
