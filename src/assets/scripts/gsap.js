import { escapeHTML } from "astro/runtime/server/escape.js";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(Draggable);

// import './horizontalLoop';

const wrapper = document.querySelector(".wrapper");
const colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];
const boxes = gsap.utils.toArray(".box");
// console.clear();
// gsap.set(boxes, {
//   backgroundColor: gsap.utils.wrap(colors),
// });

let activeElement;
const loop = horizontalLoop(boxes, {
  paused: true,
  draggable: true, // make it draggable
  center: true, // active element is the one in the center of the container rather than th left edge
  // paddingRight: 50,
  onChange: (element, index) => {
    // activeElement && activeElement.classList.remove("active");
    // element.classList.add("active");

    // gsap.globalTimeline.timeScale(999);
    // gsap.globalTimeline.timeScale(1);

    // gsap.globalTimeline.clear()

    let mytl = gsap.timeline().add("start");

    if (activeElement) {
      mytl.to(
        activeElement,
        {
          zIndex: 0,
          // translateX: 0,
          duration: 0,
          // clearProps: true
        },
        "start",
      );
      mytl.to(
        activeElement.firstElementChild,
        {
          scale: 1,
          // translateX: 0,
          duration: 0.2,
          // clearProps: true
        },
        "start",
      );
    }

    mytl.to(
      element,
      {
        zIndex: 1,
        // translateX: 0,
        duration: 0.2,
        // delay: 0.2
        // clearProps: true
      },
      "start",
    );
    mytl.to(
      element.firstElementChild,
      {
        scale: 1.15,
        // translateX: 0,
        duration: 0.2,
        delay: 0.2,
        // clearProps: true
      },
      "start",
    );

    // gsap.globalTimeline.timeScale(999);
    // gsap.globalTimeline.timeScale(1);

    // function normalize(value, length) {
    //   if (value < 0) {
    //     return length + value;
    //   } else if (value > length - 1) {
    //     return value - length;
    //   } else {
    //     return value;
    //   }
    // }

    // let first_left_index = normalize(index - 1, boxes.length);
    // let second_left_index = normalize(index - 2, boxes.length);
    // let third_left_index = normalize(index - 3, boxes.length);

    // let fourth_left_index = normalize(index - 4, boxes.length);

    // let first_right_index = normalize(index + 1, boxes.length);
    // let second_right_index = normalize(index + 2, boxes.length);
    // let third_right_index = normalize(index + 3, boxes.length);

    // let fourth_right_index = normalize(index + 4, boxes.length);

    // console.log(
    //   third_left_index,
    //   second_left_index,
    //   first_left_index,
    //   index,
    //   first_right_index,
    //   second_right_index,
    //   third_right_index
    // );

    // let mytl = gsap.timeline().add("start");

    // if (activeElement) {
    //   mytl.to(
    //     activeElement.firstElementChild,
    //     {
    //       scale: 0.85,
    //       // translateX: 0,
    //       duration: 0.3,
    //       // clearProps: true
    //     },
    //     "start"
    //   );
    // }

    // mytl.to(
    //   element.firstElementChild,
    //   {
    //     scale: 1,
    //     // translateX: 0,
    //     duration: 0.3,
    //     // clearProps: true
    //   },
    //   "start"
    // );

    // mytl.to(
    //   element.firstElementChild,
    //   {
    //     translateX: 0,
    //     duration: 0,
    //   },
    //   "start"
    // );

    // // console.log(gsap.getProperty(boxes[first_left_index].firstElementChild, 'translateX'));

    // element.firstElementChild.classList.remove("move-left");
    // element.firstElementChild.classList.remove("move-right");

    // // sleep

    // boxes[first_left_index].firstElementChild.classList.remove("move-right");
    // boxes[first_right_index].firstElementChild.classList.remove("move-left");
    // boxes[second_left_index].firstElementChild.classList.remove("move-right");
    // boxes[second_right_index].firstElementChild.classList.remove("move-left");
    // boxes[third_left_index].firstElementChild.classList.remove("move-right");
    // boxes[third_right_index].firstElementChild.classList.remove("move-left");

    // boxes[first_left_index].firstElementChild.classList.add("move-left");
    // boxes[first_right_index].firstElementChild.classList.add("move-right");
    // boxes[second_left_index].firstElementChild.classList.add("move-left");
    // boxes[second_right_index].firstElementChild.classList.add("move-right");
    // boxes[third_left_index].firstElementChild.classList.add("move-left");
    // boxes[third_right_index].firstElementChild.classList.add("move-right");

    // mytl.to(
    //   boxes[first_left_index].firstElementChild,
    //   {
    //     translateX: "-2vw",
    //     duration: 0.3,
    //     ease: "power4.out",
    //   },
    //   "start"
    // );

    // mytl.to(
    //   boxes[second_left_index].firstElementChild,
    //   {
    //     translateX: "-2vw",
    //     duration: 0,
    //     ease: "power4.out",
    //   },
    //   "start"
    // );

    // mytl.to(
    //   boxes[first_right_index].firstElementChild,
    //   {
    //     translateX: "2vw",
    //     duration: 0.3,
    //     ease: "power4.out",
    //   },
    //   "start"
    // );

    // mytl.to(
    //   boxes[second_right_index].firstElementChild,
    //   {
    //     translateX: "2vw",
    //     duration: 0,
    //     ease: "power4.out",
    //   },
    //   "start"
    // );

    // mytl.to(
    //   boxes[third_right_index].firstElementChild,
    //   {
    //     translateX: "2vw",
    //     duration: 0,
    //     ease: "power4.out",
    //   },
    //   "start"
    // );

    activeElement = element;
  },
});

boxes.forEach((box, i) =>
  box.addEventListener("click", () =>
    loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" }),
  ),
);

// document.querySelector(".toggle").addEventListener("click", () => wrapper.classList.toggle("show-overflow"));
// document.querySelector(".next").addEventListener("click", () => loop.next({duration: 0.4, ease: "power1.inOut"}));
// document.querySelector(".prev").addEventListener("click", () => loop.previous({duration: 0.4, ease: "power1.inOut"}));

// activeElement = document.querySelector(".act");
// loop.toIndex(1, { duration: 0, ease: "power1.inOut" });
// console.log(123);

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like draggable: true, center: true, speed (default: 1, which travels at roughly 100 pixels per second), paused (boolean), repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot.
 */
function horizontalLoop(items, config) {
  let timeline;
  items = gsap.utils.toArray(items);
  config = config || {};
  gsap.context(() => {
    // use a context so that if this is called from within another context or a gsap.matchMedia(), we can perform proper cleanup like the "resize" event handler on the window
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate:
          onChange &&
          function () {
            let i = tl.closestIndex();
            if (lastIndex !== i) {
              lastIndex = i;
              onChange(items[i], i);
            }
          },
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      timeOffset = 0,
      container =
        center === true
          ? items[0].parentNode
          : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () =>
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        spaceBefore[0] +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(),
          b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) * 100 +
              gsap.getProperty(el, "xPercent"),
          );
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, {
          // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
          xPercent: (i) => xPercents[i],
        });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center
          ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth
          : 0;
        center &&
          times.forEach((t, i) => {
            times[i] = timeWrap(
              tl.labels["label" + i] +
                (tl.duration() * widths[i]) / 2 / totalWidth -
                timeOffset,
            );
          });
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0,
          d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = (xPercents[i] / 100) * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond,
            },
            0,
          )
            .fromTo(
              item,
              {
                xPercent: snap(
                  ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
                ),
              },
              {
                xPercent: xPercents[i],
                duration:
                  (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false,
              },
              distanceToLoop / pixelsPerSecond,
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      refresh = (deep) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        deep && populateTimeline();
        populateOffsets();
        deep && tl.draggable
          ? tl.time(times[curIndex], true)
          : tl.progress(progress, true);
      },
      onResize = () => refresh(true),
      proxy;
    gsap.set(items, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", onResize);
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);
      return vars.duration === 0
        ? tl.time(timeWrap(time))
        : tl.tweenTo(time, vars);
    }
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.closestIndex = (setCurrent) => {
      let index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);
    tl.next = (vars) => toIndex(tl.current() + 1, vars);
    tl.previous = (vars) => toIndex(tl.current() - 1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    if (config.draggable && typeof Draggable === "function") {
      proxy = document.createElement("div");
      let wrap = gsap.utils.wrap(0, 1),
        ratio,
        startProgress,
        draggable,
        dragSnap,
        lastSnap,
        initChangeX,
        wasPlaying,
        align = () =>
          tl.progress(
            wrap(startProgress + (draggable.startX - draggable.x) * ratio),
          ),
        syncIndex = () => tl.closestIndex(true);
      typeof InertiaPlugin === "undefined" &&
        console.warn(
          "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club",
        );
      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: "x",
        onPressInit() {
          let x = this.x;
          gsap.killTweensOf(tl);
          wasPlaying = !tl.paused();
          tl.pause();
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = startProgress / -ratio - x;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value) {
          //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX;
          }
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime;
          Math.abs(dif) > tl.duration() / 2 &&
            (dif += dif < 0 ? tl.duration() : -tl.duration());
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease() {
          syncIndex();
          draggable.isThrowing && (indexIsDirty = true);
        },
        onThrowComplete: () => {
          syncIndex();
          wasPlaying && tl.play();
        },
      })[0];
      tl.draggable = draggable;
    }
    tl.closestIndex(true);
    lastIndex = curIndex;
    onChange && onChange(items[curIndex], curIndex);
    timeline = tl;
    return () => window.removeEventListener("resize", onResize); // cleanup
  });
  return timeline;
}

gsap.to(".wrapper", {
  scrollTrigger: {
    trigger: ".wrapper",
    // scrub: true,
    start: "top center",
    // end: "bottom top",
    // markers: true,
  },
  opacity: 1,
  //   // translateX: '50%',
  duration: 1,
  ease: "power3.out",
});

// slider
// var slides = document.querySelectorAll(".slide");
// var slides_count = slides.length;
//
// gsap.set(slides, { xPercent: (i) => i * 100 });

// var draggable = new Draggable(".slides-container", {
// trigger: ".slides-container",
// type: "x",
// inertia: true,
// onPressInit: function () {
//   animation.pause();
//   timer.pause();
//   updateProgress();
// },
// snap: {
//   x: (value) => gsap.utils.snap(slideWidth, value),
// },
// onDrag: updateProgress,
// onThrowUpdate: updateProgress,
// onThrowComplete: function () {
//   timer.restart(true);
// },
// });

// slider end

// https://codepen.io/GreenSock/pen/ExvZjZQ

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

// gsap.to("#smoky-bg", {
//   scrollTrigger: {
//     trigger: "#smoky-bg",
//     scrub: true,
//     start: "top bottom",
//     end: "bottom top",
//     markers: true
//   },
//   backgroundPosition: "0% 100%",
//   // translateX: '50%',
//   duration: 1
// });

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
    clearProps: true,
    // ease: "power1.out"
  },
);

// animation.kill([tablet1, tablet2, tablet3, tablet4, tablet5], "transform,translate");

gsap.to("#car", {
  scrollTrigger: {
    trigger: "#car",
    start: "top center",
    scrub: 1,
    // markers: true,
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
  ease: ease,
});
tl.to(
  "#start-overlay-span-1",
  {
    y: "-100%",
    rotate: 0,
    duration: 0.8,
    opacity: 1,
    delay: 0.6,
    ease: ease,
  },
  "<",
);
tl.to(
  "#start-overlay-span-2",
  {
    y: "-100%",
    rotate: 0,
    duration: 0.5,
    opacity: 1,
    ease: ease,
  },
  ">-0.3",
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
  ">-0.2",
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
  ">-0.4",
);

tl.to("#start-overlay-black", {
  opacity: 0,
  duration: 0.1,
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
  ">-0.31",
);
tl.to(
  "#start-overlay-span-3",
  {
    filter: "blur(8px)",
    duration: 0.4,
    ease: "slow(0.7,0.7,false)",
  },
  ">-0.31",
);
tl.to(
  "#start-overlay-span-4",
  {
    filter: "blur(8px)",
    duration: 0.4,
    ease: "slow(0.7,0.7,false)",
  },
  ">-0.31",
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
  ">-0.2",
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
