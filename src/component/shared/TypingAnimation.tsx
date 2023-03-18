"use client";

import React from "react";
import Typed from "react-typed";

export interface TypingAnimationProps {
  text: string;
  loop: boolean;
  delay: number;
}
const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  loop,
  delay,
}) => {
  return (
    <Typed
      strings={[text]}
      showCursor={false}
      typeSpeed={100}
      backSpeed={50}
      startDelay={delay}
      style={{ textAlign: "center" }}
      loop={loop}
    />
  );
};

export default TypingAnimation;
