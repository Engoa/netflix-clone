<template>
  <div class="sub--header">
    <span v-text="index" class="text--barlow" />
    <h3 v-text="title" class="text--barlow" />
  </div>
</template>

<script>
import "./SubHeader.scss";
export default {
  name: "SubHeader",
  props: {
    title: String,
    index: String,
  },
};
</script>
