import { useState } from "react";
import { Html } from "@react-three/drei";


function InputPanel({
  header,
  payload,
  secret,
  setHeader,
  setPayload,
  setSecret,
  onGenerate,
}) {
  return (
      <Html
      position={[-80,1,-25]}
      center
      transform={false}
    >
    <div className=" w-[520px] rounded-2xl border border-cyan-400/40 bg-black/50 backdrop-blur-xl p-5 shadow-[0_0_30px_rgba(0,255,255,.15)]">

      <h2 className="text-center text-3xl font-bold tracking-widest text-cyan-300 mb-5">
        JWT INPUT
      </h2>

      {/* Header */}

      <div className="mb-5">
        <p className="text-pink-400 font-semibold mb-2">
          Header JSON
        </p>

        <textarea
          rows={4}
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          className="w-full rounded-lg border border-pink-500/40 bg-[#0b0b18] p-3 text-pink-200 outline-none resize-none"
        />
      </div>

      {/* Payload */}

      <div className="mb-5">
        <p className="text-indigo-300 font-semibold mb-2">
          Payload JSON
        </p>

        <textarea
          rows={6}
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          className="w-full rounded-lg border border-indigo-500/40 bg-[#0b0b18] p-3 text-indigo-200 outline-none resize-none"
        />
      </div>

      {/* Secret */}

      <div className="mb-6">
        <p className="text-green-400 font-semibold mb-2">
          Secret Key
        </p>

        <input
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          className="w-full rounded-lg border border-green-500/40 bg-[#0b0b18] px-3 py-3 text-green-200 outline-none"
        />
      </div>

      <button
        onClick={onGenerate}
        className="w-full rounded-lg bg-cyan-400 py-3 font-bold text-black transition hover:scale-[1.02] hover:bg-cyan-300"
      >
        Generate JWT
      </button>
    </div>
    </Html>
  );
}

export default InputPanel;