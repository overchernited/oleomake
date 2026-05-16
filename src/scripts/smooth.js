import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
});

lenis.on("scroll", ScrollTrigger.update);

window.lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.ticker.lagSmoothing(0);

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

const parallaxEls = document.querySelectorAll(".parallax");
if (parallaxEls.length) {
  gsap.ticker.add(() => {
    parallaxEls.forEach((el) => {
      const depth = parseFloat(el.dataset.depth) || 20;
      gsap.to(el, {
        x: mouseX * depth,
        y: mouseY * depth,
        duration: 1.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  });
}

ScrollTrigger.batch(".hero-title, .hero-subtitle, .hero-actions, .hero-stats", {
  start: "top 92%",
  onEnter: (batch) =>
    gsap.fromTo(
      batch,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: true }
    ),
});

ScrollTrigger.batch(".section-gray .section-title, .section-gray .section-subtitle", {
  start: "top 80%",
  onEnter: (batch) =>
    gsap.fromTo(
      batch,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: true }
    ),
});

ScrollTrigger.batch(".plan-card", {
  start: "top 80%",
  onEnter: (batch) =>
    gsap.fromTo(
      batch,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out", overwrite: true }
    ),
});

ScrollTrigger.batch(".contact-info, .contact-card", {
  start: "top 80%",
  onEnter: (batch) =>
    gsap.fromTo(
      batch,
      { x: (i) => (i === 0 ? -60 : 60), opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", overwrite: true }
    ),
});

ScrollTrigger.batch(".footer", {
  start: "top 90%",
  onEnter: (batch) =>
    gsap.fromTo(
      batch,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", overwrite: true }
    ),
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href?.startsWith("#") && window.lenis) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) window.lenis.scrollTo(target);
    }
  });
});
