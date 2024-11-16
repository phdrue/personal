import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tablet1 = gsap.fromTo(
  "#tablet-1",
  {
    opacity: 0,
    translateY: "50%",
  },
  {
    scrollTrigger: {
      trigger: "#tablet-1",
      start: "top bottom",
      // markers: true,
    },
    opacity: 1,
    translateY: 0,
    duration: 1.2,
    ease: "power2.out",
    clearProps: true,
    // ease: "power1.out"
  },
);
let tablet2 = gsap.fromTo(
  "#tablet-2",
  { opacity: 0, translateY: "50%" },
  {
    scrollTrigger: {
      trigger: "#tablet-2",
      start: "top bottom",
      // markers: true,
    },
    opacity: 1,
    translateY: 0,
    duration: 1.2,
    ease: "power2.out",
    clearProps: true,
    // ease: "power1.out"
  },
);
let tablet3 = gsap.fromTo(
  "#tablet-3",
  { opacity: 0, translateY: "50%" },
  {
    scrollTrigger: {
      trigger: "#tablet-3",
      start: "top bottom",
      // markers: true,
    },
    opacity: 1,
    translateY: 0,
    duration: 1.2,
    ease: "power2.out",
    clearProps: true,
    // ease: "power1.out"
  },
);
let tablet4 = gsap.fromTo(
  "#tablet-4",
  { opacity: 0, translateY: "50%" },
  {
    scrollTrigger: {
      trigger: "#tablet-4",
      start: "top bottom",
      // markers: true,
    },
    opacity: 1,
    translateY: 0,
    duration: 1.2,
    ease: "power2.out",
    clearProps: true,
    // ease: "power1.out"
  },
);
let tablet5 = gsap.fromTo(
  "#tablet-5",
  { opacity: 0, translateY: "50%" },
  {
    scrollTrigger: {
      trigger: "#tablet-5",
      start: "top bottom",
      // markers: true,
    },
    opacity: 1,
    translateY: 0,
    duration: 1.2,
    ease: "power2.out",
    clearProps: true,
    // ease: "power1.out"
  },
);
