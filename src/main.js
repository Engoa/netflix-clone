import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import getImageUrl from "./mixins/getImageUrl";
import AppMixin from "./mixins/AppMixin";
import VueAwesomeSwiper from "vue-awesome-swiper";
import SwiperCore, { Navigation, Parallax } from "swiper";
import "swiper/swiper-bundle.css";
import VueYoutube from "vue-youtube";


Vue.use(VueYoutube);
Vue.use(VueAwesomeSwiper);
SwiperCore.use([Navigation, Parallax]);

Vue.config.productionTip = false;
Vue.mixin(AppMixin);
Vue.mixin(getImageUrl);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
