<template>
  <div>
    <div class="landing-bg">
      <v-img src="@/assets/images/landing.jpg"></v-img>
    </div>
    <div class="sign-in-up sign-up">
      <form @submit.prevent="onSubmit">
        <div class="sign-in-up__details">
          <div class="sign-in-up__header">
            <h1>Sign Up</h1>
          </div>
          <input
            spellcheck="none"
            type="email"
            placeholder="Email Address"
            v-model="email"
          />
          <input
            type="text"
            placeholder="Full Name"
            v-model="fname"
            maxlength="15"
            minlength="3"
          />
          <input
            type="number"
            placeholder="Phone Number"
            v-model="phone"
            minlength="7"
            maxlength="10"
          />
          <select v-model="country">
            <option
              :value="country.name"
              v-for="country in countryList"
              :key="country.name"
            >
              {{ country.name }}
            </option>
          </select>
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            minlength="6"
          />
        </div>
        <div class="sign-in-up__cta">
          <v-btn type="submit">Sign Up</v-btn>
        </div>
      </form>

      <div class="sign-in-up__signups">
        <div class="sign-in-up--facebook">
          <v-img
            width="20"
            height="20"
            src="@/assets/images/Facebook_icon_2013.svg"
          ></v-img>
          <a href="https://facebook.com">Sign Up with Facebook</a>
        </div>
        <div class="sign-in-up--new">
          <span>Already have an account?</span>
          <router-link to="/login"> Sign In now</router-link>
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
  </div>
</template>

<script>
import "./SignUp.scss";
import { mapActions } from "vuex";

export default {
  name: "SignUp",

  data: () => ({
    email: null,
    fname: null,
    phone: null,
    country: null,
    password: null,
    user: null,
  }),

  methods: {
    ...mapActions({
      setUserData: "user/setUserData",
      setCreateUser: "user/setCreateUser",
    }),
    onSubmit() {
      if (
        !this.email ||
        !this.password ||
        !this.fname ||
        !this.country ||
        !this.phone
      ) {
        this.$root.$emit("snackbar", {
          text: "Input fields must have a value and cannot be empty!",
        });

        return;
      } else {
        this.user = {
          email: this.email,
          fullname: this.fname,
          phone: this.phone,
          country: this.country,
          password: this.password,
        };
        this.setUserData(this.user);
        this.$root.$emit("snackbar", {
          text: `Hi ${
            this.user.fullname.split(" ")[0]
          }, you're now successfully signed up!`,
        });
        setTimeout(() => {
          this.$router.replace("/");
        }, 2000);
      }
    },
  },
};
</script>
