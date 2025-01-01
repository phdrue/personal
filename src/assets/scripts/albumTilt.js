// https://codepen.io/nxworld/pen/vrpJZN


import { gsap } from "gsap";

let Tilt = document.querySelector("#tilt");

gsap.set(Tilt, { transformPerspective: 2000, transformOrigin: "center" });
var tween = gsap.to(Tilt, {
  duration: 0,
  ease: "power1.inOut",
  paused: true,
});

Tilt.addEventListener("mousemove", (event) => {
  //   tween.vars.x =
  //     (event.pageX / window.screen.width) * (maxTilt * 2) - maxTilt;
  //   tween.vars.y =
  //     (event.pageY / window.screen.height) * (maxTilt * 2) - maxTilt;
  //   tween.invalidate().restart();
  const rect = Tilt.getBoundingClientRect(); // Получаем размеры элемента
  const centerX = rect.left + rect.width / 2; // Центр по оси X
  const centerY = rect.top + rect.height / 2; // Центр по оси Y

  const offsetX = event.clientX - centerX; // Смещение по оси X
  const offsetY = event.clientY - centerY; // Смещение по оси Y

  const percentageX = (offsetX / (rect.width / 2)); // Процентное отклонение по оси X
  const percentageY = (offsetY / (rect.height / 2)); // Процентное отклонение по оси Y

  tween.vars.rotateX = 10 * percentageX;
  tween.vars.rotateY = 10 * percentageY;
  tween.invalidate().restart();
});
