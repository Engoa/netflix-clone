<template>
  <div>
    <div class="navbar" v-if="$vuetify.breakpoint.width >= 1439">
      <a href="/" class="navbar--logo">
        <v-img src="@/assets/images/logo.svg"></v-img>
      </a>
      <ul class="navbar__navlinks">
        <router-link
          v-for="(nav, index) in navBarData"
          :key="index"
          :to="{ name: nav.link }"
        >
          <li class="navbar__navlink">
            <span class="navbar__navlink--number">{{ `0${index}` }}</span>
            {{ ` ${nav.link}` }}
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
      <div class="navbar-mobile--logo">
        <a href="/">
          <v-img src="@/assets/images/logo.svg" width="33" height="33"></v-img>
        </a>
      </div>
    </div>
    <v-navigation-drawer
      v-model="mobileNav"
      fixed
      right
      temporary
      hide-overlay
      v-if="$vuetify.breakpoint.width <= 1440"
      width="50%"
    >
      <ul class="navbar-mobile--links" v-show="mobileNav">
        <router-link
          :to="{ name: nav.link }"
          v-for="nav in navBarData"
          :key="nav.link"
        >
          <li class="navbar__navlink">
            <div>
              <span class="link-text">{{ nav.link }}</span>
            </div>
            <div class="link-icon-wrapper">
              <v-icon color="#fff" class="link-icon">{{ nav.icon }}</v-icon>
            </div>
          </li>
        </router-link>
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
        link: "Home",
        icon: "fas fa-home",
      },
      {
        link: "Destination",
        icon: "fas fa-globe-americas",
      },
      {
        link: "Crew",
        icon: "fas fa-user-astronaut",
      },
      {
        link: "Technology",
        icon: "fas fa-space-shuttle",
      },
    ],
  }),
  methods: {
    toggleMobileMenu() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>
