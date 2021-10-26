<template>
  <div class="container">
    <div class="crew">
      <div class="crew__right">
        <SubHeader text="meet your crew" index="02" />
        <v-img
          :src="getImageUrl(crewData[carousel].webp)"
          transition="scale-transition"
          :key="carousel + 'carousel'"
        />
      </div>
      <div class="crew__left">
        <v-carousel
          v-model="carousel"
          :show-arrows="false"
          dark
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(crew, index) in crewData"
            eager
            exact-active-class="active-carousel"
            :key="crew.name + index"
            transition="fade-transition"
          >
            <div class="items">
              <div class="crew__role">
                <h1 v-text="crew.role" />
              </div>
              <div class="crew__name">
                <h1 v-text="crew.name" />
              </div>
              <div class="crew__bio">
                <p v-text="crew.bio"></p>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import crewJSON from "../../assets/jsons/crew.json";
import SubHeader from "../UI/SubHeader/SubHeader.vue";
import "./Crews.scss";

export default {
  components: { SubHeader },
  name: "Crews",
  data: () => ({
    crewData: crewJSON,
    carousel: 0,
  }),
};
</script>
