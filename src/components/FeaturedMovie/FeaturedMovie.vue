<template>
  <div>
    <div class="featured-movie">
      <div class="featured-movie__image">
        <img
          src="https://occ-0-1853-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbG_guk5n6NkR9grI7LwXQbRu-NoVL0IkYsZRIRoZfOKKethszCQX9kFc-Vo9s-EkPZSMBlkU5M82m6JigUHUWKwA7iR.webp?r=09b"
        />
      </div>
      <div class="featured-movie__data">
        <div class="featured-movie__title">
          <h1>The Flash</h1>
        </div>
        <div class="featured-movie__buttons">
          <v-btn elevation="0.1"><v-icon> fas fa-play</v-icon>Play</v-btn>
          <v-btn elevation="0.1"><v-icon> fas fa-plus</v-icon>My List</v-btn>
        </div>
        <div class="featured-movie__description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
      <div class="featured-movie__rating">
        <span> 15+ </span>
      </div>
    </div>
  </div>
</template>

<script>
import "./FeaturedMovie.scss";

export default {
  name: "FeaturedMovie",
};
</script>
