import { gsap } from "gsap";

export const staggerTextOnLoad = (node) => {
  const elements = node.querySelectorAll("*");
  const timeline = gsap.timeline({ paused: true });
  timeline
    .from(node, {
      duration: 0.5,
      display: "none",
      autoAlpha: 0,
      ease: "power1.easeIn",
    })
    .from(elements, {
      duration: 1,
      autoAlpha: 0,
      x: -25,
      ease: "power1.easeOut",
      stagger: 0.5,
    });
  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};
