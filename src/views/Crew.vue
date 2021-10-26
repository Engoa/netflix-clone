<template>
  <div class="body">
    <Crews
      question="So, you want to Travel to"
      subtitle="space"
      paragraph="
    Let's face it, if you want to go to space, you might as well geniunely go to
    outher space and not hover kind of on the edge of it. Well sit back, and
    relax because we'll give you a truly out of this world experience!"
    />
  </div>
</template>

<script>
import Crews from "../components/Crews/Crews.vue";
export default {
  components: { Crews },
  name: "Destination",
};
</script>
