<template>
  <section class="netflix__genres">
    <router-view :key="$route.fullPath" />
  </section>
</template>

<script>
export default {};
</script>
