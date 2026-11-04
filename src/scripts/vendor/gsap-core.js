// Shim mapping the original bundle's gsap-core chunk exports to the npm packages.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export { gsap as d, ScrollTrigger as S, CustomEase as C };
