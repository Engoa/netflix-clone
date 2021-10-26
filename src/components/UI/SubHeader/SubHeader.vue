<template>
  <div class="sub--header">
    <div>
      <span v-text="index" class="text--barlow" />
    </div>
    <div>
      <h3 v-text="text" class="text--barlow" />
    </div>
  </div>
</template>

<script>
import "./SubHeader.scss";
export default {
  name: "SubHeader",
  props: {
    text: String,
    index: String,
  },
};
</script>
