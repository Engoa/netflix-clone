<template>
  <component :is="tag" class="fitty-wrap" :id="contentID">
    <slot />
  </component>
</template>
<script>
import fitty from "fitty";
export default {
  name: "fitty",

  data: () => ({
    fittyInstance: null,
  }),

  props: {
    tag: { type: String, default: "div" },
    options: Object,
    minSize: Number,
    maxSize: Number,
    multiLine: Boolean,
  },

  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },

  updated() {
    this.$nextTick(() => {
      this.reInit();
    });
  },

  computed: {
    fittyOptions() {
      return {
        minSize: this.minSize,
        maxSize: this.maxSize,
        multiLine: this.multiLine,
        ...this.options,
      };
    },
    contentID() {
      return "fitty-" + this._uid;
    },
  },

  methods: {
    init() {
      this.fittyInstance = fitty("#" + this.contentID, this.fittyOptions)[0];
    },
    reInit() {
      this.fittyInstance?.unsubscribe();
      this.init();
    },
  },
};
</script>
<style scoped>
.fitty-wrap {
  position: relative;
}
</style>
