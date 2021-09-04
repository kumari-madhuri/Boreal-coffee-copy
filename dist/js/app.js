gsap.registerPlugin(ScrollTrigger);
gsap.from(".nav-links", { duration: 1, opacity: 0 });
gsap.from(".hero-img", { duration: 1, opacity: 0, scale: 0.5, delay: 1 });
gsap.from(".scroll-down", {
  duration: 1.5,
  y: -30,
  ease: "bounce.out",
  delay: 2,
  repeat: 1,
});
gsap.from(".center", { duration: 1, opacity: 0, scale: 0.5, delay: 1 });

gsap.from(".right", {
  scrollTrigger: {
    trigger: ".right",
    start: "top 80%",
    // end: "bottom 90%",
    // scrub: true,
    markers: true,
    toggleActions: "restart none none reset",
  },
  x: 150,
  opacity: 0,
  duration: 1.5,
});
gsap.from(".left", {
  scrollTrigger: {
    trigger: ".left",
    start: "top 80%",
    toggleActions: "restart none none reset",
  },
  x: -150,
  opacity: 0,
  duration: 1.5,
});
gsap.from(".bottom", {
  scrollTrigger: {
    trigger: ".bottom",
    start: "top 90%",
    toggleActions: "restart none none reset",
  },
  y: 150,
  opacity: 0,
  duration: 1.5,
});
