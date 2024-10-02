import "/bootstrap.min.css";
import "/style.css";
import "/main.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);





const showcasepage = document.querySelector('.showcasepage')
const mainpage = document.querySelector('.mainpage')






let tl = gsap.timeline();



// tl.to("#introdiv", {
//   delay: 3.5,
//   duration: 0.5,
//   ease: `sine.out`,
//   opacity: 0,
//   display: "none",
// });
tl.from(".reveal", {
  opacity: 0,
  y: 100,
  duration: 0.6,
  ease: "sine.out",
  stagger: 0.1,
});

tl.from(".img_reveal", {
  top: `130%`,
  duration: 0.5,
  ease: `sine.inOut`,
  delay: `-0.95`,
});
tl.from(".nav_reveal", {
  y: -80,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out",
  delay: `-0.1`,
});



