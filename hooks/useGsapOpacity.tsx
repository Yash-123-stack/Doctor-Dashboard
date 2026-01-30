"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapOpacity = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Properly type the selector result as HTMLElement
      const elems: NodeListOf<HTMLElement> =
        document.querySelectorAll(className);

      if (elems.length === 0) return;

      elems.forEach((elem) => {
        gsap.from(elem, {
          opacity: 0,
          // 2. "ease" is a CSS term; GSAP prefers specific strings like "none" or "power1.out"
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
          },
        });
      });
    });

    return () => ctx.revert();
    // 3. Added className to the dependency array
  }, [className]);
};

export default useGsapOpacity;
