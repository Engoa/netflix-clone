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
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login-chunk" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register-chunk" */ "../views/Register.vue"),
  },

  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile-chunk" */ "../views/Profile.vue"),
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
        name: "Genre",
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
