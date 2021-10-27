<template>
  <div class="container destination-margin">
    <SubHeader text="pick your destination" index="01" />
    <div class="destinations">
      <div class="destinations__left" ref="planet">
        <v-img
          :src="getImageUrl(destinationData[tab].webp)"
          :key="tab + 'tab'"
        />
      </div>
      <div class="destinations__right">
        <div class="destinations__tabs">
          <v-tabs dark v-model="tab">
            <v-tab
              v-for="destination in destinationData"
              :key="destination.name"
            >
              {{ destination.name }}
            </v-tab>
          </v-tabs>
        </div>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="destination in destinationData"
            :key="destination.name"
            transition="fade-transition"
            eager
          >
            <div class="destinations__active">
              <h1 v-text="destination.name" />
            </div>
            <div class="destinations__text">
              <p v-text="destination.description"></p>
            </div>
            <div class="destinations__data">
              <div class="grey-line"></div>
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
  </div>
</template>

<script>
import destinationJSON from "../../assets/jsons/stars.json";
import SubHeader from "../UI/SubHeader/SubHeader.vue";
import "@/components/Destinations/Destinations.scss";
import animations from "../../mixins/animations";

export default {
  components: { SubHeader },
  name: "Destinations",
  data: () => ({
    destinationData: destinationJSON,
    tab: 0,
  }),
  mixins: [animations],

  mounted() {
    this.rightToLeft(this.$refs.planet);
  },
  watch: {
    tab: {
      deep: true,
      handler() {
        this.rightToLeft(this.$refs.planet);
      },
    },
  },
};
</script>
