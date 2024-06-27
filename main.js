import "/main.css";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function locomotiveBoilerPlate() {
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

  // START FROM HERE ABOVE IS BOILERPLATE
}

locomotiveBoilerPlate();

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

tl.to(".introanimediv", {
  y: `-100%`,
  delay: 1.5,
  duration: 1.5,
  ease: "sine.out",
});
tl.to(".introanimediv", {
  display: "none",
  duration: 0.1,
  delay: -1,
});
tl.to("text1", {
  display: "none",
  duration: 0.2,
  delay: -0.9,
});
