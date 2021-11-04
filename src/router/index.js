import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

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
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () =>
  //     import(/* webpackChunkName: "login-chunk" */ "../views/Login.vue"),
  //   meta: {
  //     name: "login",
  //   },
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () =>
  //     import(/* webpackChunkName: "register-chunk" */ "../views/Register.vue"),
  //   meta: {
  //     name: "register",
  //   },
  // },
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
