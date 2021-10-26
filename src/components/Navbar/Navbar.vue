<template>
  <div>
    <div class="navbar">
      <div :to="{ name: 'Home' }" class="navbar--logo">
        <v-img src="@/assets/images/logo.svg"></v-img>
      </div>
      <ul class="navbar__navlinks">
        <li
          class="navbar__navlink"
          v-for="(nav, index) in navBarData"
          :key="nav.text"
        >
          <router-link :to="{ name: nav.link }"
            ><span class="navbar__navlink--number">{{ `0${index}` }}</span
            >{{ ` ${nav.text}` }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-mobile">
      <div class="navbar-mobile--hamburger" @click="toggleMobileMenu">
        <v-btn color="transparent" fab small elevation="0">
          <i class="fas fa-bars"></i>
        </v-btn>
      </div>
      <div class="navbar-mobile--logo">
        <router-link to="/">
          <v-img src="@/assets/images/logo.svg" width="30" height="30"></v-img>
        </router-link>
      </div>
      <v-expand-transition appear mode="out-in" group>
        <ul class="navbar-mobile--links" v-show="mobileNav">
          <li class="navbar__navlink" v-for="nav in navBarData" :key="nav.text">
            <router-link :to="{ name: nav.link }">{{ nav.text }}</router-link>
          </li>
        </ul>
      </v-expand-transition>
    </div>
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
  },
};
</script>
