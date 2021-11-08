import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/genres",
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
    path: "/genres/:slug",
    name: "Genre",
    component: () =>
      import(/* webpackChunkName: "genre-chunk" */ "../views/Genres/Genre.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { exists } = Vue.prototype.$user;
  const authPages = ["Login", "Register"];
  if (!authPages.includes(to.name) && !exists) next({ name: "Login" });
  else if (authPages.includes(to.name) && exists) next({ name: "Home" });
  else next();
});

export default router;
