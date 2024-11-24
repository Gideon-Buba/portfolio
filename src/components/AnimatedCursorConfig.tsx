import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { isMobile } from "react-device-detect";

const AnimatedCursorConfig: React.FC = () => {
  if (isMobile) {
    return null; // Do not render the animated cursor on mobile devices
  }

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={50}
      color="211, 233, 122"
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={1.2}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      innerStyle={{
        mixBlendMode: "difference",
      }}
      outerStyle={{
        mixBlendMode: "difference",
      }}
    />
  );
};

export default AnimatedCursorConfig;
