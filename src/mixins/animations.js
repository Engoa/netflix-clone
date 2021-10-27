import gsap from "gsap";
import { Power1 } from "gsap";
export default {
  methods: {
    leftToRight(element) {
      gsap
        .from(element, {
          autoAlpha: 0,
          x: this.$vuetify?.breakpoint.lgAndUp ? 120 : 0,
          y: this.$vuetify?.breakpoint.mobile ? 100 : 0,
          filter: "blur(15px)",
          opacity: 0,
          ease: Power1.ease,
          clearProps: "all",
        })
        .totalDuration(0.5);
    },

    rightToLeft(element) {
      gsap
        .from(element, {
          autoAlpha: 0,
          x: this.$vuetify?.breakpoint.lgAndUp ? -120 : 0,
          y: this.$vuetify?.breakpoint.mobile ? -100 : 0,
          filter: "blur(20px)",
          opacity: 0,
          ease: Power1.bounce,
          clearProps: "all",
        })
        .totalDuration(0.5);
    },

    scaleAndFade(element) {
      gsap
        .from(element, {
          filter: "blur(5px)",
          opacity: 0,
          scale: 0,
          ease: Power1.bounce,
          clearProps: "all",
        })
        .totalDuration(0.4);
    },
  },
};
