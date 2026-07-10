import React, { useEffect, useRef, useState } from "react";
import { Edges, Html } from "@react-three/drei";

function Payload({
  position,
  onExpand,
  mode = "raw", // raw | encode | decode
}) {
  const boxEdge = useRef([3, 2, 3]);

  const rawPayload = '"sub":"12345"';
  const encodedPayload = "eyJzdWIiOiIxMjM0NSJ9";

  const [text, setText] = useState(rawPayload);

  useEffect(() => {
    if (mode === "raw") {
      setText(rawPayload);
      return;
    }

    const target =
      mode === "encode"
        ? encodedPayload
        : rawPayload;

    setText("");

    let index = 0;

    const timer = setInterval(() => {
      if (index >= target.length) {
        clearInterval(timer);
        return;
      }

      setText(target.slice(0, index + 1));
      index++;
    }, 40);

    return () => clearInterval(timer);
  }, [mode]);

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={boxEdge.current} />
        <meshBasicMaterial
          color="blue"
          transparent
          opacity={0}
        />

        <Edges
          scale={1.01}
          threshold={15}
          color="#857df1"
          lineWidth={8}
        />

        <Edges
          scale={1.015}
          threshold={15}
          color="#5348f0"
          lineWidth={2}
        />
      </mesh>

      <Html transform distanceFactor={4}>
        <div className="flex flex-col items-center gap-3">

          <div className="text-2xl font-bold text-[#5348f0]">
            {text}
          </div>

          {mode === "encode" && (
            <div className="bg-green-500 text-black px-2 py-1 rounded text-sm">
              ✓ Encoded
            </div>
          )}

          {mode === "decode" && (
            <div className="bg-yellow-400 text-black px-2 py-1 rounded text-sm">
              ✓ Decoded
            </div>
          )}

          <h1 className="text-5xl font-bold text-[#5348f0]">
            Payload
          </h1>

          <button
            onClick={onExpand}
            className="bg-[#857df1] px-3 py-1 rounded-md"
          >
            Expand View
          </button>

        </div>
      </Html>
    </group>
  );
}

export default Payload;