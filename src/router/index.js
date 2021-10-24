import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Destination from "../views/Destination.vue";
import Crew from "../views/Crew.vue";
import Technology from "../views/Technology.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destination,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/crew",
    name: "Crew",
    component: Crew,
  },
  {
    path: "/technology",
    name: "Technology",
    component: Technology,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
