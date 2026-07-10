import React, { useRef } from "react";
import { QuadraticBezierLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function ConnectionLine({
  start = [0, 0, 0],
  end = [0, 0, 0],
  color = "#00ffff",
  visible = true,
}) {
  const glow = useRef();

  useFrame(({ clock }) => {
    if (!glow.current) return;

    glow.current.material.opacity =
      0.4 + Math.sin(clock.elapsedTime * 3) * 0.3;
  });

  if (!visible) return null;

  // Middle control point (raises the curve)
  const mid = [
    (start[0] + end[0]) / 2,
    Math.max(start[1], end[1]) + 1.2, // Increase for more curve
    (start[2] + end[2]) / 2,
  ];

  return (
    <>
      {/* Glow */}
      <QuadraticBezierLine
        ref={glow}
        start={start}
        end={end}
        mid={mid}
        color={color}
        lineWidth={4}
        transparent
        opacity={0.35}
      />

      {/* Bright Center */}
      <QuadraticBezierLine
        start={start}
        end={end}
        mid={mid}
        color={color}
        lineWidth={1}
      />
    </>
  );
}

export default ConnectionLine;