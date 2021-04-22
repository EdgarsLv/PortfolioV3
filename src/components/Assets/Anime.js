import React from "react";

export const Anime = () => {
  return (
    <svg style={{ width: "0", height: "0" }}>
      <filter id="wavy">
        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="7" seed="2">
          <animate
            attributeName="baseFrequency"
            dur="60s"
            values="0.02;0.05;0.02"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="20" />
      </filter>
    </svg>
  );
};
export default Anime;
