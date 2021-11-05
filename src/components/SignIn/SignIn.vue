<template>
  <div>
    <div class="landing-bg">
      <v-img src="@/assets/images/landing.jpg"></v-img>
    </div>
    <div class="sign-in-up">
      <form @submit.prevent="onSubmit">
        <div class="sign-in-up__details">
          <div class="sign-in-up__header">
            <h1>Sign In</h1>
          </div>
          <input
            spellcheck="none"
            type="email"
            placeholder="Email or phone number"
            v-model="email"
          />
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <div class="sign-in-up__cta">
          <v-btn type="submit">Sign In</v-btn>
          <div class="sign-in-up__cta--options">
            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                Remember me
                <v-tooltip> Opens in new window </v-tooltip>
              </template>
            </v-checkbox>
            <a href="/">Need help?</a>
          </div>
        </div>
      </form>

      <div class="sign-in-up__signups">
        <div class="sign-in-up--facebook">
          <v-img
            width="20"
            height="20"
            src="@/assets/images/Facebook_icon_2013.svg"
          ></v-img>
          <a href="https://facebook.com">Sign In with Facebook</a>
        </div>
        <div class="sign-in-up--new">
          <span>New to Netflix?</span>
          <router-link to="register"> Sign up now</router-link>
        </div>
        <div class="sign-in-up--captcha">
          <span
            >This page is protected by Google reCaptcha to ensure you're not a
            bot</span
          >
          <a href="/">Learn more</a>
        </div>
      </div>
    </div>
    <v-snackbar v-model="snackbar.active" timeout="2000">
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="#e50914" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import "./SignIn.scss";
import { mapActions } from "vuex";

export default {
  name: "SignIn",

  data: () => ({
    email: null,
    password: null,
    checkbox: false,
    snackbar: {
      active: false,
      message: "",
    },
  }),

  methods: {
    ...mapActions({
      setUserData: "user/setUserData",
    }),

    onSubmit() {
      if (!this.email & !this.password) {
        this.snackbar.active = true;
        this.snackbar.message = "Input fields cannot be empty!";
        return;
      } else if (
        this.password !== this.userData.password ||
        this.email !== this.userData.email
      ) {
        this.snackbar.active = true;
        this.snackbar.message = "Invalid email or password!";
        return;
      } else {
        this.snackbar.active = true;
        this.snackbar.message = "Successfully logged in - redirecting...";
        this.setUserData(this.user);
        setTimeout(() => {
          this.$router.replace("/");
        }, 2000);
      }
    },
  },
};
</script>
