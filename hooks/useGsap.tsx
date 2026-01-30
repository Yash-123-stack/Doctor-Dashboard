"use client";

import React from "react";
import useGsapOpacity from "./useGsapOpacity";
import useGsapOpacityTransAppear from "./useGsapOpacityTransAppear";
import useGsapStagger from "./useGsapStagger";
import useGsapScale from "./useGsapScale";
import useGsapHeight from "./useGsapHeight";
import useGsapSlideIn from "./useGsapSlidein"; // 1. Import the new hook

const useGSAP = (pageClassName: string) => {
  useGsapOpacity(pageClassName + " .gsap-opacity");
  useGsapOpacityTransAppear(pageClassName + " .gsap-fade-in");
  useGsapStagger(
    pageClassName + " .gsap-stagger",
    pageClassName + " .gsap-stagger-parent",
  );
  useGsapScale(pageClassName + " .gsap-scale");
  useGsapHeight(pageClassName + " .gsap-height");

  // 2. Add the slide-in call
  useGsapSlideIn(pageClassName + " .gsap-slide-in");
};

export default useGSAP;
