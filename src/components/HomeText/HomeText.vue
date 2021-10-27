<template>
  <div class="container">
    <div class="main-wrapper">
      <div class="main-wrapper__texts">
        <span class="main-wrapper-question">{{ question }}</span>
        <h1 class="main-wrapper-space">{{ subtitle }}</h1>
        <p class="main-wrapper-p">
          {{ paragraph }}
        </p>
      </div>
    </div>
    <aside>
      <router-link :to="{ name: 'Destination' }" class="circle">
        <div class="circle--main" ref="circle">EXPLORE</div>
      </router-link>
    </aside>
  </div>
</template>

<script>
import "@/components/HomeText/HomeText.scss";
import animations from "../../mixins/animations";

export default {
  name: "HomeText",
  props: {
    question: String,
    subtitle: String,
    paragraph: String,
  },
  mixins: [animations],
  mounted() {
    this.scaleAndFade(this.$refs.circle);
  },
};
</script>
