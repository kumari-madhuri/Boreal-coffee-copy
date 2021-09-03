gsap.from(".nav-links", { duration: 1, opacity: 0 });
gsap.from(".hero-img", { duration: 1, opacity: 0, scale: 0.5, delay: 1 });
gsap.from(".scroll-down", {
  duration: 1.5,
  y: -30,
  ease: "bounce.out",
  delay: 2,
  repeat: 1,
});
