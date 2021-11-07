import Vue from "vue";

const AppPlugin = {
  install(Vue) {
    const root = new Vue({
      data: () => ({
        scrollPos: 0,
      }),

      created() {
        this.listenToScroll();
      },

      methods: {
        listenToScroll() {
          window.addEventListener(
            "scroll",
            () => (this.scrollPos = window.scrollY)
          );
        },
      },
    });

    // Exports AppPlugin observable
    Vue.prototype.$app = Vue.observable(root);
  },
};

Vue.use(AppPlugin);
export default AppPlugin;

// To use this plugin in other components copy this code:

// watch: {
//     "$app.scrollPos": function (val) {
//       const heightsSubtraction =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       if (val >= heightsSubtraction) {
//         // do something if reached to bottom
//       }
//     },
//   },
