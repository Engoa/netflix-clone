<template>
  <div class="container">
    <div class="destinations">
      <div class="destinations__left">
        <img src="@/assets/images/image-mars.png" />
      </div>
      <div class="destinations__right">
        <v-tabs dark v-model="tab">
          <!-- <v-tab v-for="destination in destinationData" :key="destination"> {{ destination.name }} </v-tab> -->
        </v-tabs>
        <div class="destinations__active">
          <h1>Mars</h1>
        </div>
        <div class="destinations__text">
          <p>
            Don't forget to pack your hiking boots, You'll need them to tackle Olympus Mons, the tallest planetary
            mountain in our solar system. It's two and a half times the size of Everest!
          </p>
        </div>
        <div class="destinations__data">
          <div>
            <h5>Avg. Distance</h5>
            <span>225 Mil. KM</span>
          </div>
          <div>
            <h5>Est Travel time</h5>
            <span>9 Months</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/Destinations/Destinations.scss";
import destinationJSON from "../../assets/jsons/stars.json";
export default {
  name: "Destinations",
  data: () => ({
    destinationData: destinationJSON,
    tab: null,
    destinations: [
      {
        text: "Moon",
      },
      {
        text: "Mars",
      },
      {
        text: "Europa",
      },
      {
        text: "Titan",
      },
    ],
  }),
  methods: {
    test() {
      console.log(this.destinationData);
    },
  },
  mounted() {
    this.test();
  },
};
</script>
