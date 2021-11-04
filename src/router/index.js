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
    path: "/login",
    name: "Landing",
    component: () =>
      import(/* webpackChunkName: "genres-chunk" */ "../views/Landing.vue"),
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
