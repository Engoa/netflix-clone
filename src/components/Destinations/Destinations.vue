<template>
  <div class="destinations">
    <div class="destinations__left">
      <SubHeader title="pick your destination" index="01" />

      <v-img
        :src="getImageUrl(destinationData[tab].webp)"
        transition="scale-transition"
        :key="tab + 'tab'"
      />
    </div>
    <div class="destinations__right">
      <div class="destinations__tabs">
        <v-tabs dark v-model="tab">
          <v-tab v-for="destination in destinationData" :key="destination.name">
            {{ destination.name }}
          </v-tab>
        </v-tabs>
      </div>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="destination in destinationData"
          :key="destination.name"
          eager
        >
          <div class="destinations__active">
            <h1 v-text="destination.name" />
          </div>
          <div class="destinations__text">
            <p v-text="destination.description"></p>
          </div>
          <div class="destinations__data">
            <div>
              <h5>Avg. Distance</h5>
              <span v-text="destination.distance" />
            </div>
            <div>
              <h5>Est Travel time</h5>
              <span v-text="destination.travel" />
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import "@/components/Destinations/Destinations.scss";
import destinationJSON from "../../assets/jsons/stars.json";
import SubHeader from "../UI/SubHeader/SubHeader.vue";
export default {
  components: { SubHeader },
  name: "Destinations",
  data: () => ({
    destinationData: destinationJSON,
    tab: 0,
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
};
</script>
