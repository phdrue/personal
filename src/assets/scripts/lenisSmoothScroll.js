import 'lenis/dist/lenis.css';

import Lenis from "lenis";

const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
  });

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);