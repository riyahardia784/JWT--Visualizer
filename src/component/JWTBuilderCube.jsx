import React, { useEffect, useRef, useState } from "react";
import { Html, Edges } from "@react-three/drei";

function JWTBuilderCube({
  position,
  header,
  payload,
  secret,
  onExpand,
  currentStep,
}) {
  const boxEdge = useRef([7, 4, 3]);

  const [headerDone, setHeaderDone] = useState(false);
  const [payloadDone, setPayloadDone] = useState(false);
  const [secretDone, setSecretDone] = useState(false);
  const [signatureDone, setSignatureDone] = useState(false);

  const [jwt, setJwt] = useState("");

  const finalJWT =
    "eyJhbGciOiJIUzI1NiJ9." +
    "eyJzdWIiOiIxMjM0NSIsIm5hbWUiOiJKb2huIERvZSJ9." +
    "X2xjM29kU2lnbmF0dXJl";

  useEffect(() => {
    if (currentStep !== 4) {
      setHeaderDone(false);
      setPayloadDone(false);
      setSecretDone(false);
      setSignatureDone(false);
      setJwt("");
      return;
    }

    async function animate() {
      setHeaderDone(false);
      setPayloadDone(false);
      setSecretDone(false);
      setSignatureDone(false);
      setJwt("");

      await wait(700);
      setHeaderDone(true);

      await wait(700);
      setPayloadDone(true);

      await wait(700);
      setSecretDone(true);

      await wait(900);
      setSignatureDone(true);

      let i = 0;

      const timer = setInterval(() => {
        if (i >= finalJWT.length) {
          clearInterval(timer);
          return;
        }

        setJwt(finalJWT.slice(0, i + 1));
        i++;
      }, 18);
    }

    animate();
  }, [currentStep]);

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={boxEdge.current} />

        <meshBasicMaterial
          transparent
          opacity={0}
        />

        <Edges
          scale={1.01}
          threshold={15}
          color="#00F5FF"
          lineWidth={8}
        />

        <Edges
          scale={1.015}
          threshold={15}
          color="#00F5FF"
          lineWidth={2}
        />
      </mesh>

      <Html transform distanceFactor={4}>
        <div className="flex flex-col items-center gap-3 w-[430px]">

          <h1 className="text-4xl font-bold text-cyan-300 drop-shadow-[0_0_20px_#00ffff]">
            JWT Builder
          </h1>

          <div className="w-full rounded-xl  text-xl font-semibold text-white border p-4 space-y-3 mb-2">

            <div className="flex justify-between">
              <span>Header</span>

              <span className={headerDone ? "text-green-400" : "text-gray-500"}>
                {headerDone ? "✓" : "..."}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Payload</span>

              <span className={payloadDone ? "text-green-400" : "text-gray-500"}>
                {payloadDone ? "✓" : "..."}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Secret Key</span>

              <span className={secretDone ? "text-green-400" : "text-gray-500"}>
                {secretDone ? "✓" : "..."}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Signature</span>

              <span className={signatureDone ? "text-green-400" : "text-gray-500"}>
                {signatureDone ? "✓" : "..."}
              </span>
            </div>

            <div className="border-t  border-cyan-700 pt-3">
              <p className="text-xl text-cyan-300 mb-2">
                Final JWT
              </p>

              <div className="break-all rounded bg-black/60 p-2 text-[16px]  text-cyan-200 min-h-[90px]">
                {jwt}
              </div>
            </div>
          </div>

          <button
            onClick={onExpand}
            className="bg-cyan-400 text-black px-7 py-2 rounded-lg font-bold hover:scale-105 transition"
          >
            Expand View
          </button>

        </div>
      </Html>
    </group>
  );
}

export default JWTBuilderCube;