import React from "react";
import { Html } from "@react-three/drei";

function TokenCard({ token }) {
  const parts = token ? token.split(".") : [];

  const header = parts[0] || "HEADER";
  const payload = parts[1] || "PAYLOAD";
  const signature = parts[2] || "SIGNATURE";

  return (
    <Html
      position={[-5, 13, 1]}
      transform
      distanceFactor={10}
    >
      <div className="w-[900px] rounded-2xl border border-cyan-400/40 bg-[#07111d]/90 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(0,255,255,.2)]">

        {/* Title */}

        <h2 className="text-center text-4xl font-bold text-cyan-300 tracking-widest mb-6">
          GENERATED JWT TOKEN
        </h2>

        {/* Token */}

        <div className="flex flex-wrap items-center justify-center text-lg font-mono break-all">

          <span className="text-pink-400">
            {header}
          </span>

          <span className="mx-2 text-white">
            .
          </span>

          <span className="text-indigo-300">
            {payload}
          </span>

          <span className="mx-2 text-white">
            .
          </span>

          <span className="text-green-400">
            {signature}
          </span>

        </div>

        {/* Divider */}

        <div className="my-6 border-t border-cyan-500/30"></div>

        {/* Legend */}

        <div className="grid grid-cols-3 gap-6">

          <div className="rounded-xl border border-pink-500/30 bg-pink-500/10 p-4 text-center">
            <h3 className="text-pink-400 text-xl font-bold">
              Header
            </h3>

            <p className="mt-2 text-gray-300 text-sm">
              Algorithm & Token Type
            </p>
          </div>

          <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-4 text-center">
            <h3 className="text-indigo-300 text-xl font-bold">
              Payload
            </h3>

            <p className="mt-2 text-gray-300 text-sm">
              User Claims & Information
            </p>
          </div>

          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center">
            <h3 className="text-green-400 text-xl font-bold">
              Signature
            </h3>

            <p className="mt-2 text-gray-300 text-sm">
              HMAC SHA256 Verification
            </p>
          </div>

        </div>

        {/* Footer */}

        <div className="mt-6 text-center text-cyan-300 font-semibold">
          Header.Payload.Signature
        </div>

      </div>
    </Html>
  );
}

export default TokenCard;