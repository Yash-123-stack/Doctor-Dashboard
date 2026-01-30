"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapHeight = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Type as HTMLElement to avoid 'any' and get access to height properties
      const elems: NodeListOf<HTMLElement> =
        document.querySelectorAll(className);

      if (elems.length === 0) return;

      elems.forEach((elem) => {
        gsap.from(elem, {
          height: 0,
          // 2. Use "none" for scrubbed animations to keep them synced with the scroll
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
    // 3. Dependency array ensures this runs once or when the class changes
  }, [className]);
};

export default useGsapHeight;
