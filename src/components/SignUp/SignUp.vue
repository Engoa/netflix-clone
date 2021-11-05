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
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            v-model="fname"
            maxlength="15"
            minlength="3"
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            v-model="phone"
            minlength="7"
            maxlength="10"
            required
          />
          <select v-model="country" required>
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
            required
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
    snackbar: {
      active: false,
      message: "",
    },
  }),

  computed: {
    countryList() {
      return [
        { name: "Albania", code: "AL" },
        { name: "Åland Islands", code: "AX" },
        { name: "Algeria", code: "DZ" },
        { name: "American Samoa", code: "AS" },
        { name: "Andorra", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Anguilla", code: "AI" },
        { name: "Antarctica", code: "AQ" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Aruba", code: "AW" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Azerbaijan", code: "AZ" },
        { name: "Bahamas (the)", code: "BS" },
        { name: "Bahrain", code: "BH" },
        { name: "Bangladesh", code: "BD" },
        { name: "Barbados", code: "BB" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Belize", code: "BZ" },
        { name: "Benin", code: "BJ" },
        { name: "Bermuda", code: "BM" },
        { name: "Bhutan", code: "BT" },
        { name: "Bolivia (Plurinational State of)", code: "BO" },
        { name: "Bonaire, Sint Eustatius and Saba", code: "BQ" },
        { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Botswana", code: "BW" },
        { name: "Bouvet Island", code: "BV" },
        { name: "Brazil", code: "BR" },
        { name: "British Indian Ocean Territory (the)", code: "IO" },
        { name: "Brunei Darussalam", code: "BN" },
        { name: "Bulgaria", code: "BG" },
        { name: "Burkina Faso", code: "BF" },
        { name: "Burundi", code: "BI" },
        { name: "Cabo Verde", code: "CV" },
        { name: "Cambodia", code: "KH" },
        { name: "Cameroon", code: "CM" },
        { name: "Canada", code: "CA" },
        { name: "Cayman Islands (the)", code: "KY" },
        { name: "Central African Republic (the)", code: "CF" },
        { name: "Chad", code: "TD" },
        { name: "Chile", code: "CL" },
        { name: "China", code: "CN" },
        { name: "Christmas Island", code: "CX" },
        { name: "Cocos (Keeling) Islands (the)", code: "CC" },
        { name: "Colombia", code: "CO" },
        { name: "Comoros (the)", code: "KM" },
        { name: "Congo (the Democratic Republic of the)", code: "CD" },
        { name: "Congo (the)", code: "CG" },
        { name: "Cook Islands (the)", code: "CK" },
        { name: "Costa Rica", code: "CR" },
        { name: "Croatia", code: "HR" },
        { name: "Cuba", code: "CU" },
        { name: "Curaçao", code: "CW" },
        { name: "Cyprus", code: "CY" },
        { name: "Czechia", code: "CZ" },
        { name: "Côte d'Ivoire", code: "CI" },
        { name: "Denmark", code: "DK" },
        { name: "Djibouti", code: "DJ" },
        { name: "Dominica", code: "DM" },
        { name: "Dominican Republic (the)", code: "DO" },
        { name: "Ecuador", code: "EC" },
        { name: "Egypt", code: "EG" },
        { name: "El Salvador", code: "SV" },
        { name: "Equatorial Guinea", code: "GQ" },
        { name: "Eritrea", code: "ER" },
        { name: "Estonia", code: "EE" },
        { name: "Eswatini", code: "SZ" },
        { name: "Ethiopia", code: "ET" },
        { name: "Falkland Islands (the) [Malvinas]", code: "FK" },
        { name: "Faroe Islands (the)", code: "FO" },
        { name: "Fiji", code: "FJ" },
        { name: "Finland", code: "FI" },
        { name: "France", code: "FR" },
        { name: "French Guiana", code: "GF" },
        { name: "French Polynesia", code: "PF" },
        { name: "French Southern Territories (the)", code: "TF" },
        { name: "Gabon", code: "GA" },
        { name: "Gambia (the)", code: "GM" },
        { name: "Georgia", code: "GE" },
        { name: "Germany", code: "DE" },
        { name: "Ghana", code: "GH" },
        { name: "Gibraltar", code: "GI" },
        { name: "Greece", code: "GR" },
        { name: "Greenland", code: "GL" },
        { name: "Grenada", code: "GD" },
        { name: "Guadeloupe", code: "GP" },
        { name: "Guam", code: "GU" },
        { name: "Guatemala", code: "GT" },
        { name: "Guernsey", code: "GG" },
        { name: "Guinea", code: "GN" },
        { name: "Guinea-Bissau", code: "GW" },
        { name: "Guyana", code: "GY" },
        { name: "Haiti", code: "HT" },
        { name: "Heard Island and McDonald Islands", code: "HM" },
        { name: "Holy See (the)", code: "VA" },
        { name: "Honduras", code: "HN" },
        { name: "Hong Kong", code: "HK" },
        { name: "Hungary", code: "HU" },
        { name: "Iceland", code: "IS" },
        { name: "India", code: "IN" },
        { name: "Indonesia", code: "ID" },
        { name: "Iran (Islamic Republic of)", code: "IR" },
        { name: "Iraq", code: "IQ" },
        { name: "Ireland", code: "IE" },
        { name: "Isle of Man", code: "IM" },
        { name: "Israel", code: "IL" },
        { name: "Italy", code: "IT" },
        { name: "Jamaica", code: "JM" },
        { name: "Japan", code: "JP" },
        { name: "Jersey", code: "JE" },
        { name: "Jordan", code: "JO" },
        { name: "Kazakhstan", code: "KZ" },
        { name: "Kenya", code: "KE" },
        { name: "Kiribati", code: "KI" },
        { name: "Korea (the Democratic People's Republic of)", code: "KP" },
        { name: "Korea (the Republic of)", code: "KR" },
        { name: "Kuwait", code: "KW" },
        { name: "Kyrgyzstan", code: "KG" },
        { name: "Lao People's Democratic Republic (the)", code: "LA" },
        { name: "Latvia", code: "LV" },
        { name: "Lebanon", code: "LB" },
        { name: "Lesotho", code: "LS" },
        { name: "Liberia", code: "LR" },
        { name: "Libya", code: "LY" },
        { name: "Liechtenstein", code: "LI" },
        { name: "Lithuania", code: "LT" },
        { name: "Luxembourg", code: "LU" },
        { name: "Macao", code: "MO" },
        { name: "Madagascar", code: "MG" },
        { name: "Malawi", code: "MW" },
        { name: "Malaysia", code: "MY" },
        { name: "Maldives", code: "MV" },
        { name: "Mali", code: "ML" },
        { name: "Malta", code: "MT" },
        { name: "Marshall Islands (the)", code: "MH" },
        { name: "Martinique", code: "MQ" },
        { name: "Mauritania", code: "MR" },
        { name: "Mauritius", code: "MU" },
        { name: "Mayotte", code: "YT" },
        { name: "Mexico", code: "MX" },
        { name: "Micronesia (Federated States of)", code: "FM" },
        { name: "Moldova (the Republic of)", code: "MD" },
        { name: "Monaco", code: "MC" },
        { name: "Mongolia", code: "MN" },
        { name: "Montenegro", code: "ME" },
        { name: "Montserrat", code: "MS" },
        { name: "Morocco", code: "MA" },
        { name: "Mozambique", code: "MZ" },
        { name: "Myanmar", code: "MM" },
        { name: "Namibia", code: "NA" },
        { name: "Nauru", code: "NR" },
        { name: "Nepal", code: "NP" },
        { name: "Netherlands (the)", code: "NL" },
        { name: "New Caledonia", code: "NC" },
        { name: "New Zealand", code: "NZ" },
        { name: "Nicaragua", code: "NI" },
        { name: "Niger (the)", code: "NE" },
        { name: "Nigeria", code: "NG" },
        { name: "Niue", code: "NU" },
        { name: "Norfolk Island", code: "NF" },
        { name: "Northern Mariana Islands (the)", code: "MP" },
        { name: "Norway", code: "NO" },
        { name: "Oman", code: "OM" },
        { name: "Pakistan", code: "PK" },
        { name: "Palau", code: "PW" },
        { name: "Panama", code: "PA" },
        { name: "Papua New Guinea", code: "PG" },
        { name: "Paraguay", code: "PY" },
        { name: "Peru", code: "PE" },
        { name: "Philippines (the)", code: "PH" },
        { name: "Pitcairn", code: "PN" },
        { name: "Poland", code: "PL" },
        { name: "Portugal", code: "PT" },
        { name: "Puerto Rico", code: "PR" },
        { name: "Qatar", code: "QA" },
        { name: "Republic of North Macedonia", code: "MK" },
        { name: "Romania", code: "RO" },
        { name: "Russian Federation (the)", code: "RU" },
        { name: "Rwanda", code: "RW" },
        { name: "Réunion", code: "RE" },
        { name: "Saint Barthélemy", code: "BL" },
        { name: "Saint Helena, Ascension and Tristan da Cunha", code: "SH" },
        { name: "Saint Kitts and Nevis", code: "KN" },
        { name: "Saint Lucia", code: "LC" },
        { name: "Saint Martin (French part)", code: "MF" },
        { name: "Saint Pierre and Miquelon", code: "PM" },
        { name: "Saint Vincent and the Grenadines", code: "VC" },
        { name: "Samoa", code: "WS" },
        { name: "San Marino", code: "SM" },
        { name: "Sao Tome and Principe", code: "ST" },
        { name: "Saudi Arabia", code: "SA" },
        { name: "Senegal", code: "SN" },
        { name: "Serbia", code: "RS" },
        { name: "Seychelles", code: "SC" },
        { name: "Sierra Leone", code: "SL" },
        { name: "Singapore", code: "SG" },
        { name: "Sint Maarten (Dutch part)", code: "SX" },
        { name: "Slovakia", code: "SK" },
        { name: "Slovenia", code: "SI" },
        { name: "Solomon Islands", code: "SB" },
        { name: "Somalia", code: "SO" },
        { name: "South Africa", code: "ZA" },
        { name: "South Georgia and the South Sandwich Islands", code: "GS" },
        { name: "South Sudan", code: "SS" },
        { name: "Spain", code: "ES" },
        { name: "Sri Lanka", code: "LK" },
        { name: "Sudan (the)", code: "SD" },
        { name: "Suriname", code: "SR" },
        { name: "Svalbard and Jan Mayen", code: "SJ" },
        { name: "Sweden", code: "SE" },
        { name: "Switzerland", code: "CH" },
        { name: "Syrian Arab Republic", code: "SY" },
        { name: "Taiwan (Province of China)", code: "TW" },
        { name: "Tajikistan", code: "TJ" },
        { name: "Tanzania, United Republic of", code: "TZ" },
        { name: "Thailand", code: "TH" },
        { name: "Timor-Leste", code: "TL" },
        { name: "Togo", code: "TG" },
        { name: "Tokelau", code: "TK" },
        { name: "Tonga", code: "TO" },
        { name: "Trinidad and Tobago", code: "TT" },
        { name: "Tunisia", code: "TN" },
        { name: "Turkey", code: "TR" },
        { name: "Turkmenistan", code: "TM" },
        { name: "Turks and Caicos Islands (the)", code: "TC" },
        { name: "Tuvalu", code: "TV" },
        { name: "Uganda", code: "UG" },
        { name: "Ukraine", code: "UA" },
        { name: "United Arab Emirates (the)", code: "AE" },
        {
          name: "United Kingdom of Great Britain and Northern Ireland (the)",
          code: "GB",
        },
        { name: "United Statesminlengthor Outlying Islands (the)", code: "UM" },
        { name: "United States of America (the)", code: "US" },
        { name: "Uruguay", code: "UY" },
        { name: "Uzbekistan", code: "UZ" },
        { name: "Vanuatu", code: "VU" },
        { name: "Venezuela (Bolivarian Republic of)", code: "VE" },
        { name: "Viet Nam", code: "VN" },
        { name: "Virgin Islands (British)", code: "VG" },
        { name: "Virgin Islands (U.S.)", code: "VI" },
        { name: "Wallis and Futuna", code: "WF" },
        { name: "Western Sahara", code: "EH" },
        { name: "Yemen", code: "YE" },
        { name: "Zambia", code: "ZM" },
        { name: "Zimbabwe", code: "ZW" },
      ];
    },
  },

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
        this.snackbar.active = true;
        this.snackbar.message =
          "Input fields must have a value and cannot be empty!";
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
        this.snackbar.active = true;
        this.snackbar.message = `Hi ${
          this.user.fullname.split(" ")[0]
        }, you're now successfully signed up!`;
        setTimeout(() => {
          this.$router.replace("/");
        }, 2000);
      }
    },
  },
};
</script>
