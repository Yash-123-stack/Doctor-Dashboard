import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapOpacityTransAppear = (className: string) => {
  useEffect(() => {
    // gsap.context helps clean up animations easily in React
    const ctx = gsap.context(() => {
      // Use HTMLElement to avoid the 'any' issue and get proper GSAP support
      const elems: NodeListOf<HTMLElement> =
        document.querySelectorAll(className);

      if (elems.length === 0) return;

      elems.forEach((elem) => {
        gsap.from(elem, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power2.out", // "ease" isn't a standard GSAP string, power2.out is smoother
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert(); // Clean up on unmount

    // Adding className to the dependency array ensures the hook reruns
    // if the selector changes.
  }, [className]);
};

export default useGsapOpacityTransAppear;
