<template>
  <div>
    <div class="landing-bg">
      <v-img src="@/assets/images/landing.jpg"></v-img>
    </div>
    <div :class="['login-signup', { 'sign-in': isLogin }]">
      <form @submit.prevent="onSubmit">
        <div class="login-signup__details">
          <div class="login-signup__header">
            <h1>{{ title }}</h1>
          </div>
          <v-text-field
            type="email"
            placeholder="Email Address"
            v-model="fields.email"
            rounded
            spellcheck="false"
          />
          <v-text-field
            v-if="isRegister"
            type="text"
            placeholder="Full Name"
            maxlength="15"
            minlength="3"
            v-model="fields.fname"
            rounded
            spellcheck="false"
          />
          <v-text-field
            v-if="isRegister"
            type="number"
            placeholder="Phone Number"
            minlength="7"
            maxlength="10"
            v-model="fields.phone"
            rounded
            spellcheck="false"
          />
          <v-select
            v-model="fields.country"
            v-if="isRegister"
            :items="states"
            rounded
            placeholder="Country"
          >
          </v-select>
          <v-text-field
            type="password"
            placeholder="Password"
            v-model="fields.password"
            minlength="6"
            rounded
            spellcheck="false"
          />
        </div>
        <div class="login-signup__cta">
          <v-btn type="submit">{{ title }}</v-btn>
        </div>
      </form>

      <div class="login-signup__signups">
        <div class="login-signup--facebook">
          <v-img
            width="20"
            height="20"
            src="@/assets/images/Facebook_icon_2013.svg"
          ></v-img>
          <a href="https://facebook.com">
            {{ isLogin ? "Sign In" : "Sign Up" }} with Facebook</a
          >
        </div>
        <div class="login-signup--new">
          <span>{{
            isLogin ? "New to Netflix?" : "Already have an account?"
          }}</span>
          <router-link :to="isLogin ? '/register' : '/login'">
            {{ isLogin ? "Sign Up" : "Sign In" }} now</router-link
          >
        </div>
        <div class="login-signup--captcha">
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
import { mapActions } from "vuex";
import "./LoginSignup.scss";
export default {
  data: () => ({
    fields: {
      email: null,
      fname: null,
      phone: null,
      country: null,
      password: null,
      checkbox: false,
    },
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    user: null,
  }),

  props: {
    title: {
      type: String,
      default: "",
    },
  },

  computed: {
    isRegister() {
      return this.$route.name === "Register";
    },
    isLogin() {
      return this.$route.name === "Login";
    },
  },

  methods: {
    ...mapActions({
      setUserData: "user/setUserData",
    }),

    onSubmit() {
      if (this.isLogin) {
        if (!this.fields.email & !this.fields.password) {
          this.$root.$emit("snackbar", {
            text: "Input fields cannot be empty!",
            icon: "fas fa-times",
          });

          return;
        } else if (
          this.fields.password !== this.userData.password ||
          this.fields.email !== this.userData.email
        ) {
          this.$root.$emit("snackbar", {
            text: "Invalid email or password!",
            icon: "fas fa-times",
          });
          return;
        } else {
          this.$root.$emit("snackbar", {
            text: "Successfully logged in - redirecting...",
            icon: "fas fa-check",
          });
          this.setUserData(this.user);
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      }

      if (this.isRegister) {
        if (
          !this.fields.email ||
          !this.fields.password ||
          !this.fields.fname ||
          !this.fields.country ||
          !this.fields.phone
        ) {
          this.$root.$emit("snackbar", {
            text: "Input fields must have a value and cannot be empty!",
            icon: "fas fa-times",
          });

          return;
        } else {
          this.user = {
            email: this.fields.email,
            fullname: this.fields.fname,
            phone: this.fields.phone,
            country: this.fields.country,
            password: this.fields.password,
          };
          this.setUserData(this.user);
          this.$root.$emit("snackbar", {
            text: `Hi ${
              this.user.fullname.split(" ")[0].charAt(0).toUpperCase() +
              this.user.fullname.slice(1).split(" ")[0]
            }, you're now successfully signed up!`,
            icon: "fas fa-check",
          });
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      }
    },
  },
};
</script>

<style></style>
