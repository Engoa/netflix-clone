import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import app from "./plugins/app";
import UserPlugin from "./plugins/user";
import getImageUrl from "./mixins/getImageUrl";
import AppMixin from "./mixins/AppMixin";
import utils from "./mixins/utils";
import VueAwesomeSwiper from "vue-awesome-swiper";
import SwiperCore, { Navigation, Parallax } from "swiper";
import "swiper/swiper-bundle.css";
import VueYoutube from "vue-youtube";

Vue.mixin(AppMixin);
Vue.mixin(utils);
Vue.mixin(getImageUrl);

SwiperCore.use([Navigation, Parallax]);
Vue.use(VueYoutube);
Vue.use(VueAwesomeSwiper);
Vue.use(UserPlugin);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  app,
  UserPlugin,
  render: (h) => h(App),
}).$mount("#app");
