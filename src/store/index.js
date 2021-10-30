import Vue from "vue";
import netflix from "./modules/netflix";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    netflix,
  },
});
