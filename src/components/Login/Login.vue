<template>
  <div>
    <div class="landing-bg">
      <v-img src="@/assets/images/landing.jpg"></v-img>
    </div>
    <div class="login">
      <form @submit.prevent="onSubmit">
        <div class="login__details">
          <div class="login__header">
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
        <div class="login__cta">
          <v-btn type="submit">Sign In</v-btn>
          <div class="login__cta--options">
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

      <div class="login__signups">
        <div class="login--facebook">
          <v-img
            width="20"
            height="20"
            src="@/assets/images/Facebook_icon_2013.svg"
          ></v-img>
          <span>Login with Facebook</span>
        </div>
        <div class="login--new">
          <span>New to Netflix?</span> <a href="/">Sign up now</a>
        </div>
        <div class="login--captcha">
          <span
            >This page is protected by Google reCaptcha to ensure you're not a
            bot</span
          >
          <a href="/">Learn more</a>
        </div>
      </div>
    </div>
    <v-snackbar v-model="snackbar">
      Input fields cannot be empty!
      <template v-slot:action="{ attrs }">
        <v-btn color="#e50914" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import "./Login.scss";
// import { mapActions } from "vuex";
export default {
  name: "Login",

  data: () => ({
    checkbox: false,
    password: null,
    email: null,
    user: null,
    snackbar: false,
  }),

  methods: {
    onSubmit() {
      if (!this.email & !this.password) {
        this.snackbar = true;
        return;
      } else {
        this.user = {
          email: this.email,
          password: this.password,
        };
        this.setLS("user", this.user);
        this.$router.replace("/");
      }
      console.log(this.user);
    },
  },
};
</script>
