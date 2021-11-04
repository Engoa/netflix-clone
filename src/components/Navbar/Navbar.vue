<template>
  <div>
    <nav :class="['nav', { 'nav--active': navBarActive }]">
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
          <NavSettings />
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
      <div class="sidebar">
        <router-link to="/profile" class="sidebar__user anchors">
          <div class="sidebar__user-avatar">
            <v-img
              class="nav__left__logo"
              src="../../assets/images/avatar.png"
              height="45"
              width="55"
            />
          </div>
          <div class="sidebar__user-name">
            <span>Ido Ben Zaken</span>
          </div>
          <v-icon class="user-arrow">fa fa-arrow-right</v-icon>
        </router-link>
      </div>
      <router-link to="/notifications" class="sidebar__notifications anchors">
        <v-icon>far fa-bell</v-icon>
        <span>Notifications</span>
      </router-link>
      <router-link to="/downloads" class="sidebar__downloads anchors">
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
          :title="genre.title"
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
import NavSettings from "../NavSettings/NavSettings.vue";

export default {
  components: { SearchBar, NavSettings },
  name: "Navbar",
  data: () => ({
    scrollPosition: 0,
    navBarActive: false,
    sideNav: false,
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 60) {
        this.navBarActive = true;
      } else {
        this.navBarActive = false;
      }
    },
    toggleNav() {
      this.sideNav = !this.sideNav;
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

  created() {
    document.addEventListener("scroll", this.updateScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.updateScroll);
  },
};
</script>
