<template>
  <NetflixRow
    :data="myList"
    title="My List"
    v-if="myList.length"
    class="mylist"
  />
</template>

<script>
import NetflixRow from "../components/NetflixRow/NetflixRow.vue";
import { mapActions } from "vuex";

export default {
  components: { NetflixRow },
  name: "MyList",
  methods: {
    ...mapActions({
      setMyList: "mylist/setMyList",
    }),
  },

  mounted() {
    const myListLS = JSON.parse(localStorage.getItem("mylist"));
    if (myListLS) {
      this.setMyList(myListLS);
    }
  },
};
</script>
