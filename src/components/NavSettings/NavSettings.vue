<template>
  <div>
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" class="nav__right__search nav__btn"
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
</template>

<script>
import "./NavSettings.scss";
import { mapActions } from "vuex";

export default {
  name: "NavSettings",
  data: () => ({}),
  methods: {
    ...mapActions({
      setUserData: "user/setUserData",
    }),
    logout() {
      window.localStorage.removeItem("user");
      this.$router.go("/login");
    },
  },
};
</script>
