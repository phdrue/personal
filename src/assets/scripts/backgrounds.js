import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".black-background");
console.log(sections);

sections.forEach(section => gsap.to(section, {
    scrollTrigger: {
        trigger: section,
        start: "top, top",
        end: "top+=10% top",
        scrub: true
    },
    backgroundColor: "#1d1d1d",
    // duration: 0.1
}))