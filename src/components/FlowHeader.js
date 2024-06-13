import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FlowSlider } from "./FlowSlider";

import "./flowHeader.scss";

const AnimatedSubText = ({ subTextData, subTextTitle, isInView }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: isInView ? subTextData : 0,
    delay: 200,
    config: { duration: 1000 },
  });

  return (
    <div className="subText-content">
      <div className="subText-content-data">
        <animated.div>{number.to((n) => `${n.toFixed(0)}+`)}</animated.div>
      </div>
      <div className="subText-content-title">{subTextTitle}</div>
    </div>
  );
};

export const FlowHeader = ({ item }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const headerClass = item.sectionImage
    ? "flow-header-container white-text"
    : "flow-header-container";

  return (
    <div className={headerClass} ref={ref}>
      <div className="flow-header-title">{item.sectionTitle}</div>
      <div className="flow-header-text">{item.sectionMainText}</div>

      {item.quotes && <FlowSlider item={item.quotes} />}

      {item.sectionSubTextData && (
        <div className="container-subText">
          {item.sectionSubTextData.map((subTextItem) => (
            <div key={subTextItem.subTextId}>
              <AnimatedSubText
                subTextData={subTextItem.subTextData}
                subTextTitle={subTextItem.subTextTitle}
                isInView={isInView}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
