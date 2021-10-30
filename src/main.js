import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import getImageUrl from "./mixins/getImageUrl";
import axios from "axios";

Vue.config.productionTip = false;
Vue.mixin(getImageUrl);
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
