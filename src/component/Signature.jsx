import React, { useEffect, useRef, useState } from "react";
import { Edges, Html } from "@react-three/drei";

function Signature({
  position,
  onExpand,
  currentStep,
  secret = "my-secret-key",
}) {
  const boxEdge = useRef([3, 2, 3]);

  const [displayText, setDisplayText] = useState("Waiting...");
  const [generated, setGenerated] = useState(false);

  const finalHash =
    "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  useEffect(() => {
  if (currentStep !== 3) {
    setGenerated(false);
    setDisplayText("Waiting...");
    return;
  }

  async function animate() {
    setGenerated(false);

    setDisplayText(`🔑 Secret: ${secret}`);
    await new Promise(r => setTimeout(r, 700));

    setDisplayText("📦 Header + Payload");
    await new Promise(r => setTimeout(r, 700));

    setDisplayText("⚡ Generating HMAC SHA256...");
    await new Promise(r => setTimeout(r, 700));

    let i = 0;

    const timer = setInterval(() => {
      if (i >= finalHash.length) {
        clearInterval(timer);
        setGenerated(true);
        return;
      }

      setDisplayText(finalHash.slice(0, i + 1));
      i++;
    }, 25);
  }

  animate();
}, [currentStep, secret]);
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={boxEdge.current} />

        <meshBasicMaterial
          color="green"
          transparent
          opacity={0}
        />

        <Edges
          scale={1.01}
          threshold={15}
          color="#5ad162"
          lineWidth={8}
        />

        <Edges
          scale={1.015}
          threshold={15}
          color="#14b41f"
          lineWidth={2}
        />
      </mesh>

      <Html transform distanceFactor={4}>
        <div className="flex flex-col items-center gap-3">

          <div className="text-center text-green-400 text-lg font-bold max-w-[250px] break-all">
            {displayText}
          </div>

          {generated && (
            <div className="px-3 py-1 rounded bg-green-500 text-black font-bold animate-pulse">
              ✓ Signature Generated
            </div>
          )}

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold text-[#14b41f] drop-shadow-[0_0_12px_#14b41f]">
              Signature
            </h1>

            <button
              onClick={onExpand}
              className="bg-[#14b41f] px-3 py-1 rounded-md text-black font-bold"
            >
              Expand View
            </button>
          </div>

        </div>
      </Html>
    </group>
  );
}

export default Signature;