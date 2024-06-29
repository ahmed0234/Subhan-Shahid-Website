import "/main.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

// PREVIOUS INTRO ANIMAITON

// tl.to(".intro_animation  div", {
//   width: "100%",
//   delay: 0.2,
//   duration: 0.35,
//   stagger: 0.18,
//   ease: "sine.out",
// });

// tl.to(".intro_animation  div", {
//   width: "0%",
//   left: `-100%`,
//   duration: 0.4,
//   stagger: 0.2,
//   delay: -0.75,
// });
// tl.to(".intro_animation", {
//   display: "none",
//   delay: -0.67,
// });

// ===============

// tl.to("#introdiv", {
//   delay: 3.5,
//   duration: 0.5,
//   ease: `sine.out`,
//   opacity: 0,
//   display: "none",
// });
// tl.from(".reveal", {
//   opacity: 0,
//   y: 100,
//   duration: 0.6,
//   ease: "sine.out",
//   stagger: 0.1,
// });

// tl.from(".img_reveal", {
//   top: `130%`,
//   duration: 0.5,
//   ease: `sine.inOut`,
//   delay: `-0.95`,
// });
// tl.from(".nav_reveal", {
//   y: -80,
//   opacity: 0,
//   duration: 0.6,
//   ease: "power3.out",
//   delay: `-0.1`,
// });
