import React, { useEffect, useState, useRef } from "react";
import "./welcomeBanner.scss";

const WelcomeBanner = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const requestRef = useRef();
  const bannerRef = useRef();

  const positionRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  });

  const handleMouseMove = (event) => {
    const rect = bannerRef.current.getBoundingClientRect();
    setMouseX(event.clientX - rect.left);
    setMouseY(event.clientY - rect.top);
  };

  useEffect(() => {
    const banner = bannerRef.current;
    banner.addEventListener("mousemove", handleMouseMove);
    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".motion-object-statue, .motion-object-eye, .motion-object-circle"
    );
    elements.forEach((element) => {
      element.addEventListener("animationend", () => {
        element.style.animation = "none";
      });
    });
  }, []);

  const animate = () => {
    const { x, y, vx, vy } = positionRef.current;
    const dx = (mouseX - x) * 0.02;
    const dy = (mouseY - y) * 0.02;

    positionRef.current.vx += dx;
    positionRef.current.vy += dy;

    positionRef.current.vx *= 0.5;
    positionRef.current.vy *= 0.5;

    positionRef.current.x += positionRef.current.vx;
    positionRef.current.y += positionRef.current.vy;

    const calcTransform = (x, y, speed) => ({
      transform: `translate(${x * speed}px, ${y * speed}px)`,
    });

    document.querySelectorAll(".motion-object").forEach((element) => {
      const speed = parseFloat(element.getAttribute("data-speed"));
      const style = calcTransform(
        positionRef.current.x,
        positionRef.current.y,
        speed
      );
      element.style.transform = style.transform;
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mouseX, mouseY]);

  return (
    <div className="welcome-banner" ref={bannerRef}>
      <div className="banner-message">
        <div className="banner-message-title">We bring the Magic.</div>
        <div className="banner-message-body">
          This is a cloneApp for a software company that provides 360-degree
          services from strategy to development to build delightfull software
          solutions that make their customers succesful.
        </div>
        <div className="banner-message-link">Discover More</div>
      </div>
      <div className="motion">
        <div className="motion-object-group">
          <img
            src="https://mobven.com/wp-content/uploads/revslider/main-slider/slider-image-1-min-copyright1.png"
            alt="Statue"
            className="motion-object motion-object-statue"
            data-speed="0.005"
          />
          <img
            src="https://mobven.com/wp-content/uploads/2022/12/slider-image-3-min.webp"
            alt="Eye"
            className="motion-object motion-object-eye"
            data-speed="0.015"
          />
          <div className="motion-object motion-object-block" />
          <div
            className="motion-object motion-object-circle"
            data-speed="0.04"
          />
          <div
            className="motion-object motion-object-donut-blue"
            data-speed="0.05"
          />
          <div
            className="motion-object motion-object-donut-red"
            data-speed="0.09"
          />
          <div
            className="motion-object motion-object-circle-sec"
            data-speed="0.05"
          />
          <img
            src="https://mobven.com/wp-content/uploads/2022/12/slider-image-4-min.webp"
            alt="Circle-dot"
            className="motion-object motion-object-circle-dot"
            data-speed="0.05"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
