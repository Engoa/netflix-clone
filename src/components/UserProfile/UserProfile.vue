<template>
  <div>
    <div>
      <div class="sign-in-up">
        <form>
          <div class="sign-in-up__details">
            <div class="sign-in-up__header">
              <h1>Sign In</h1>
            </div>
            <input
              spellcheck="none"
              type="email"
              placeholder="Email or phone number"
            />
            <input type="password" placeholder="Password" />
          </div>
          <div class="sign-in-up__cta">
            <v-btn type="submit">Sign In</v-btn>
            <div class="sign-in-up__cta--options">
              <v-checkbox>
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
    </div>
  </div>
</template>

<script>
import "./UserProfile.scss";
// import { mapActions } from "vuex";

export default {
  name: "UserProfile",
  data: () => ({}),
  methods: {},
};
</script>
