import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import getImageUrl from "./mixins/getImageUrl";
import AppMixin from "./mixins/AppMixin";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.mixin(AppMixin);
Vue.mixin(getImageUrl);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
