var slides = document.querySelectorAll(".slide");
var numSlides = slides.length;

gsap.set(slides, { xPercent: (i) => i * 100 });

var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
var wrapProgress = gsap.utils.wrap(0, 1);

var proxy = document.createElement("div");
var slideWidth = 0;
var wrapWidth = 0;
var animation = gsap.timeline({ repeat: -1 });
resize();

var draggable = new Draggable(proxy, {
  trigger: ".slides-container",
  type: "x",
  inertia: true,
  onPressInit: function () {
    animation.pause();
    timer.pause();
    updateProgress();
  },
  snap: {
    x: (value) => gsap.utils.snap(slideWidth, value),
  },
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  onThrowComplete: function () {
    timer.restart(true);
  },
});

window.addEventListener("resize", resize);

function animateSlides(direction) {
  var progress = animation.progress() + direction / numSlides;
  timer.pause();
  animation.pause();
  gsap.to(animation, {
    duration: slideDuration,
    progress: gsap.utils.snap(1 / numSlides, progress),
    overwrite: true,
    modifiers: {
      progress: wrapProgress, // value => (value < 0 || value === 1 ? 1 : 0) + (value % 1)
    },
    onComplete: () => timer.restart(true),
  });
}

function updateProgress() {
  animation.progress(wrapProgress(gsap.getProperty(proxy, "x") / wrapWidth));
}

function resize() {
  var progress = animation.progress();
  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;

  animation
    .progress(0)
    .clear()
    .to(slides, {
      duration: 100,
      xPercent: "+=" + numSlides * 100,
      ease: "none",
      modifiers: {
        xPercent: wrap,
      },
    })
    .to(proxy, { x: wrapWidth, duration: 100, ease: "none" }, 0)
    .progress(progress);
}
