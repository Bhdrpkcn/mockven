import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setScrollPercentage,
  setSectionStage,
} from "../store/animation/animationSlice";

const ScrollTracker = () => {
  const dispatch = useDispatch();

  const handleScroll = () => {
    const scrollY = window.scrollY; //vertical scroll value
    const documentHeight = document.documentElement.scrollHeight; //total document height

    const windowHeight = window.innerHeight; //current window Height
    const scrollPercentage = Math.trunc(
      (scrollY / (documentHeight - windowHeight)) * 100
    );
    // console.log(scrollY, "/", documentHeight, "-", windowHeight, "*100");
    // console.log(scrollY, "/", documentHeight - windowHeight);
    // console.log("scroll Percentage =", scrollPercentage);

    dispatch(setScrollPercentage(scrollPercentage));

    const sections = document.querySelectorAll(".flow-container");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      console.log(windowHeight);
      if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
        dispatch(setSectionStage(section.id));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollTracker;
