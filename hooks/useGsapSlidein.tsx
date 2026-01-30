"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapSlideIn = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typing as HTMLElement to resolve previous TS issues
      const elems: NodeListOf<HTMLElement> =
        document.querySelectorAll(className);

      if (elems.length === 0) return;

      elems.forEach((elem) => {
        gsap.from(elem, {
          x: 100, // Start 100px to the right
          opacity: 0, // Start invisible
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 90%", // Starts when top of element hits 90% of viewport
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, [className]);
};

export default useGsapSlideIn;
