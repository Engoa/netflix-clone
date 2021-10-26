<template>
  <div>
    <div class="navbar" v-if="$vuetify.breakpoint.width >= 1439">
      <div :to="{ name: 'Home' }" class="navbar--logo">
        <v-img src="@/assets/images/logo.svg"></v-img>
      </div>
      <ul class="navbar__navlinks">
        <router-link
          v-for="(nav, index) in navBarData"
          :key="index"
          :to="{ name: nav.link }"
        >
          <li class="navbar__navlink">
            <span class="navbar__navlink--number">{{ `0${index}` }}</span>
            {{ ` ${nav.text}` }}
          </li>
        </router-link>
      </ul>
    </div>
    <div class="navbar-mobile" v-if="$vuetify.breakpoint.width <= 1440">
      <div class="navbar-mobile--hamburger" @click="toggleMobileMenu">
        <v-btn text color="transparent" fab small elevation="0">
          <v-icon v-show="!mobileNav" color="#fff">fas fa-bars</v-icon>
          <v-icon v-show="mobileNav" color="#fff">fas fa-times</v-icon>
        </v-btn>
      </div>
      <div class="navbar-mobile--logo" @click="toggleMobileMenu">
        <router-link to="/">
          <v-img src="@/assets/images/logo.svg" width="30" height="30"></v-img>
        </router-link>
      </div>
    </div>
    <v-navigation-drawer
      v-model="mobileNav"
      fixed
      right
      temporary
      hide-overlay
      v-if="$vuetify.breakpoint.width <= 1440"
      width="180"
    >
      <ul class="navbar-mobile--links" v-show="mobileNav">
        <li
          class="navbar__navlink"
          v-for="nav in navBarData"
          :key="nav.text"
          @click="closeNavBar"
        >
          <router-link :to="{ name: nav.link }">{{ nav.text }}</router-link>
        </li>
      </ul>
    </v-navigation-drawer>
  </div>
</template>

<script>
import "@/components/Navbar/Navbar.scss";
export default {
  data: () => ({
    mobileNav: false,
    navBarData: [
      {
        text: "Home",
        link: "Home",
      },
      {
        text: "Destination",
        link: "Destination",
      },
      {
        text: "Crew",
        link: "Crew",
      },
      {
        text: "Technology",
        link: "Technology",
      },
    ],
  }),
  methods: {
    toggleMobileMenu() {
      this.mobileNav = !this.mobileNav;
    },
    closeNavBar() {
      this.mobileNav = false;
    },
  },
};
</script>
