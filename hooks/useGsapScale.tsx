import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapScale = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Correctly type the NodeList
      const elems: NodeListOf<HTMLElement> =
        document.querySelectorAll(className);

      if (elems.length === 0) {
        return;
      }

      elems.forEach((elem) => {
        gsap.from(elem, {
          scale: 0.5,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, [className]);
};

export default useGsapScale;
