import { gsap } from "gsap";

const getDefaultTimeline = (node) => {
  const timeline = gsap.timeline({ paused: true });
  const elements = node.querySelectorAll("*");

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

  return timeline;
};

export const play = (node) => {
  const timeline = getDefaultTimeline(node);

  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};
