<template>
  <v-carousel-item>
    <div class="items">
      <div class="carousel__role">
        <h1 v-text="isCrew ? item.role : 'The Terminology'" />
      </div>
      <div class="carousel__name">
        <h1 v-text="item.name" />
      </div>
      <div class="carousel__bio">
        <p v-text="isCrew ? item.bio : item.description"></p>
      </div>
    </div>
  </v-carousel-item>
</template>

<script>
export default {
  props: {
    item: null,
    isCrew: Boolean,
  },
};
</script>

<style></style>
