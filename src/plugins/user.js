import isEmpty from "lodash/isEmpty";
import Vue from "vue";
import toLower from "lodash/toLower";
import startCase from "lodash/startCase";

/**
 * User Plugin, manages user localstorage
 *
 * accesible around the app via:
 * 1. `this.$user` in vue components
 * 2. `this._vm.$user` inside js modules
 * 3. `Vue.prototype.$user` if second option dont work. **must `import Vue from "vue";`**
 *
 */

const UserPlugin = {
  install(Vue) {
    const root = new Vue({
      data: {
        user: {
          // LOGIN
          email: "",
        },
      },
      created() {
        this.onLoad();
      },
      computed: {
        // isAuthenticated() {
        //   if (!this.exists) return false;
        //   // return !!this.user?.uid;
        //   return !!this.user?.email;
        // },

        exists() {
          return !isEmpty(this.user);
        },

        displayName() {
          if (!this.exists) return undefined;

          const { last, first, email } = this.user;
          if (last && first)
            return Vue.prototype.$app.capitalize(`${first} ${last}`);
          else if (first) return first;
          else return email.split("@")[0];
        },

        capitalLetters() {
          return this.displayName
            ?.split(" ")
            .map((name) => name.substring(0, 1))
            .join("")
            .toUpperCase();
        },
        capitalize(string) {
          return startCase(toLower(string));
        },
      },
      methods: {
        onLoad() {
          if (!this.isUserExists) return;
          try {
            this.user = JSON.parse(localStorage.getItem("user")) || undefined;
          } catch (err) {
            console.log("%c Could not parse user", "color: pink");
          }
        },
        /** Checks if user exists, Return a boolean */
        isUserExists() {
          return !!localStorage.getItem("user");
        },
        /** @param user - Saves user to localStorage*/
        saveUser(user) {
          return new Promise((resolve) => {
            localStorage.setItem("user", JSON.stringify(user));
            this.user = user;
            resolve();
          });
        },

        /** @param user - Smart merging new user data into user data at Local Storage */
        mergeUser(user) {
          const merged = Object.assign({}, this.user, user);
          this.saveUser(merged);
        },
        /** Removes from localStorags */
        deleteCurrentUser() {
          localStorage.removeItem("user");
          this.user = {};
        },
      },
    });

    // Exports UserPlugin observable
    Vue.prototype.$user = Vue.observable(root);
  },
};

Vue.use(UserPlugin);

export default UserPlugin;
