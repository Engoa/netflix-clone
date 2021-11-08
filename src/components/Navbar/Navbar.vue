<template>
  <div>
    <nav :class="['nav', { 'nav--active': navBarActive }]" v-if="$user.exists">
      <div class="nav__left">
        <v-icon
          width="100"
          class="nav__left__hamburger nav__btn"
          @click="toggleNav"
          >fas fa-bars</v-icon
        >
        <router-link to="/">
          <v-img
            class="nav__left__logo"
            src="../../assets/images/netflix-logo.png"
          />
        </router-link>
        <div class="nav__right">
          <div class="nav__right--settings">
            <v-menu
              open-on-hover
              content-class="nav__right--settings__menu"
              attach=".settings-btn"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" class="nav__btn settings-btn"
                  >fas fa-ellipsis-h</v-icon
                >
              </template>
              <v-list>
                <router-link to="/settings">
                  <v-list-item>
                    <v-list-item-title> Settings </v-list-item-title>
                  </v-list-item>
                </router-link>
                <v-list-item @click.stop="logout">
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <SearchBar />
        </div>
      </div>
    </nav>
    <v-navigation-drawer
      v-model="sideNav"
      fixed
      temporary
      :width="$vuetify.breakpoint.width > '768' ? '300' : '75%'"
    >
      <router-link to="/profile" class="sidebar__user anchors" title="Profile">
        <div class="sidebar__user--avatar">
          <v-img
            class="nav__left__logo"
            src="../../assets/images/avatar2.png"
            height="45"
            width="55"
          />
        </div>
        <div class="sidebar__user--name">
          <span>{{ $user.displayName }}</span>
        </div>
        <v-icon class="sidebar__user--arrow">fa fa-arrow-right</v-icon>
      </router-link>
      <router-link
        to="/notifications"
        class="sidebar__notifications anchors"
        title="Notifications"
      >
        <v-icon>far fa-bell</v-icon>
        <span>Notifications</span>
      </router-link>
      <router-link
        to="/downloads"
        class="sidebar__downloads anchors"
        title="Downloads"
      >
        <v-icon>fas fa-save</v-icon>
        <span>My Downloads</span>
      </router-link>
      <ul class="sidebar--links">
        <router-link to="/" class="anchors" active-class="home-active">
          <li class="sidebar__navlink">
            <span class="link-text">Home</span>
          </li>
        </router-link>
        <router-link
          v-for="(genre, index) in apiRows"
          :title="genre.link.charAt(0).toUpperCase() + genre.link.slice(1)"
          :key="genre.title + index"
          :to="`/genres/${genre.title}`"
          class="anchors"
        >
          <li class="sidebar__navlink">
            <span class="link-text">{{ genre.link }}</span>
          </li>
        </router-link>
      </ul>
    </v-navigation-drawer>
  </div>
</template>

<script>
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar.vue";
import capitalize from "lodash/capitalize";
import { mapActions } from "vuex";

export default {
  components: { SearchBar },
  name: "Navbar",
  data: () => ({
    scrollPosition: 0,
    navBarActive: false,
    sideNav: false,
  }),

  watch: {
    "$app.scrollPos": function (val) {
      this.navBarActive = val > 60;
    },
  },
  methods: {
    toggleNav() {
      this.sideNav = !this.sideNav;
    },
    ...mapActions({
      setUserData: "user/setUserData",
    }),
    logout() {
      this.$user.deleteCurrentUser();
      window.localStorage.removeItem("mylist");
      window.localStorage.removeItem("netflix");
      this.$router.go("/login");
    },
  },
  computed: {
    apiRows() {
      return [
        ...Object.entries(this.MOVIEDB_GENERES).map(([value, key]) => ({
          link: key,
          title: capitalize(value),
        })),
      ];
    },
  },
};
</script>
