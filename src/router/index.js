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
    path: "/destination",
    name: "Destination",
    meta: {
      name: "destination",
    },
    component: () =>
      import(
        /* webpackChunkName: "destination-chunk" */ "../views/Destination.vue"
      ),
  },
  {
    path: "/crew",
    name: "Crew",
    meta: {
      name: "crew",
    },
    component: () =>
      import(/* webpackChunkName: "crew-chunk" */ "../views/Crew.vue"),

    // receive id in component: this.$route.params.id
    // push to route with id: this.$router.push({ name:'Name', id })

    // children: {
    //   path: ":id",
    //   name: "Crew",
    //   component: () =>
    //     import(/* webpackChunkName: "crew-chunk" */ "../views/CrewItem.vue"),
    // },
  },
  {
    path: "/technology",
    name: "Technology",
    meta: {
      name: "technology",
    },
    component: () =>
      import(
        /* webpackChunkName: "technology-chunk" */ "../views/Technology.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
