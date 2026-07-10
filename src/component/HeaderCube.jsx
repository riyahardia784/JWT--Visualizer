import React, { useEffect, useRef, useState } from "react";
import { Html, Edges } from "@react-three/drei";

function HeaderCube({
  position,
  onExpand,
  mode,
  header,
}) {
  const boxEdge = useRef([3, 2, 3]);

  const [encoded, setEncoded] = useState(false);
  const [displayText, setDisplayText] = useState(header);

  // Base64URL Encode
  const encodedString = btoa(header)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  useEffect(() => {
    if (mode !== "encode") {
      setEncoded(false);
      setDisplayText(header);
      return;
    }

    setEncoded(false);
    setDisplayText("");

    let index = 0;

    const timer = setInterval(() => {
      if (index >= encodedString.length) {
        clearInterval(timer);
        setEncoded(true);
        return;
      }

      setDisplayText(encodedString.slice(0, index + 1));
      index++;
    }, 35);

    return () => clearInterval(timer);
  }, [mode, header]);

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={boxEdge.current} />

        <meshBasicMaterial
          color="hotpink"
          transparent
          opacity={0}
        />

        <Edges
          scale={1.01}
          threshold={15}
          color="#FF69B4"
          lineWidth={8}
        />

        <Edges
          scale={1.015}
          threshold={15}
          color="#FF69B4"
          lineWidth={2}
        />
      </mesh>

      <Html transform distanceFactor={4}>
        <div className="flex flex-col items-center gap-3">

          <div className="max-w-[280px] break-all text-center text-pink-400 text-lg font-bold">
            {displayText}
          </div>

          {encoded && (
            <div className="rounded bg-green-500 px-3 py-1 text-sm font-bold text-black">
              ✓ Base64URL Encoded
            </div>
          )}

          <h1 className="text-5xl font-bold text-pink-400">
            {encoded ? "Encoded Header" : "Header"}
          </h1>

          <button
            onClick={onExpand}
            className="rounded bg-pink-500 px-4 py-2 font-bold transition hover:scale-105"
          >
            Expand View
          </button>

        </div>
      </Html>
    </group>
  );
}

export default HeaderCube;