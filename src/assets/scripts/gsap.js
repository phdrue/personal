import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// slide
// var slide = gsap.to("#car", { x: "250%", duration: 3 });
// rotate
// var rotate = gsap.to("#car", { rotation: 5, duration: 0.5, repeat: -1 });

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#car",
//     start: "top center",
//     scrub: 1,
//     markers: true,
//   },
// });
// tl.to("#car", { x: "250%", duration: 6 });
// tl.to("#car", { rotation: 5, duration: 2, repeat: 3, yoyo: true, ease: 'back' });

gsap.to("#car", {
  scrollTrigger: {
    trigger: "#car",
    start: "top center",
    scrub: 1,
    markers: true,
  }, // start the animation when ".box" enters the viewport (once)
  x: "250%",
  duration: 6,
});

// gsap.to("#car", {
//   scrollTrigger: {
//     trigger: "#car",
//     start: "top center",
//     markers: true,
//   }, // start the animation when ".box" enters the viewport (once)
//   rotation: 9, duration: 2, repeat: -1, yoyo: true, ease: 'back'
// });

// gsap.to("#start-overlay", {
//   opacity: 0,
//   display: 'none',
//   delay: 2,
//   duration: 1,
//   ease: "expoScale(0.5,7,none)",
// });

const ease = "slow(0.3,0.4,false)";

const text_animation = {
  y: "-100%",
  duration: 0.4,
  opacity: 1,
  ease: ease,
};

var tl = gsap.timeline();
tl.to("#start-overlay-text-container", {
  rotate: 0,
  duration: 1.8,
  ease: ease
});
tl.to("#start-overlay-span-1", {
  y: "-100%",
  rotate: 0,
  duration: 0.8,
  opacity: 1,
  delay: 0.6,
  ease: ease,
}, "<");
tl.to(
  "#start-overlay-span-2",
  {
    y: "-100%",
    rotate: 0,
    duration: 0.5,
    opacity: 1,
    ease: ease,
  },
  ">-0.3"
);
tl.to(
  "#start-overlay-span-3",
  {
    y: "-100%",
    rotate: 0,
    duration: 0.5,
    opacity: 1,
    ease: ease,
  },
  ">-0.2"
);
tl.to(
  "#start-overlay-span-4",
  {
    y: "-100%",
    rotate: 0,
    duration: 0.6,
    opacity: 1,
    ease: ease,
  },
  ">-0.4"
);

tl.to("#start-overlay-black", {
  opacity: 0,
  duration: 0.1
});

tl.to("#start-overlay-span-1", {
  filter: "blur(8px)",
  duration: 0.4,
  delay: 0.1,
  ease: "slow(0.7,0.7,false)",
});
tl.to(
  "#start-overlay-span-2",
  {
    filter: "blur(8px)",
    duration: 0.4,
    ease: "slow(0.7,0.7,false)",
  },
  ">-0.31"
);
tl.to(
  "#start-overlay-span-3",
  {
    filter: "blur(8px)",
    duration: 0.4,
    ease: "slow(0.7,0.7,false)",
  },
  ">-0.31"
);
tl.to(
  "#start-overlay-span-4",
  {
    filter: "blur(8px)",
    duration: 0.4,
    ease: "slow(0.7,0.7,false)",
  },
  ">-0.31"
);
tl.to(
  "#start-overlay",
  {
    opacity: 0,
    display: "none",
    // delay: 2,
    duration: 1.2,
    ease: "expoScale(0.5,7,none)",
  },
  ">-0.2"
);

// gsap.to("#start-overlay-text", {
//   duration: 2,
//   text: {
//     value: "Will You Be Remembered?",
//     delimiter: " ",
//     speed: 0.1,
//     newClass: "text-green-500",
//     oldClass: "text-red-500"
//     // newClass: "translate-y-0",
//     // oldClass: "translate-y-4",
//   },
//   ease: "expoScale(0.5,7,none)",
// });
