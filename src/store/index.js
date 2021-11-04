import Vue from "vue";
import netflix from "./modules/netflix";
import user from "./modules/user";
import mylist from "./modules/mylist";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    netflix,
    user,
    mylist,
  },
});
