import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setScrollPercentage,
  setSectionStage,
} from "../store/animation/animationSlice";

const ScrollTracker = () => {
  const dispatch = useDispatch();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentage = Math.trunc(
      (scrollY / (documentHeight - windowHeight)) * 100
    );

    dispatch(setScrollPercentage(scrollPercentage));

    const sections = document.querySelectorAll(".flow-container");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
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
