import React from "react";
import { Html } from "@react-three/drei";

function JWTSummaryCard({ header, payload, secret }) {
  return (
    <Html
      position={[22, 7, 0]}
      transform
      distanceFactor={15}
    >
      <div className="w-[620px] rounded-2xl border border-cyan-400/40 bg-[#08131f]/90 backdrop-blur-lg p-6 shadow-[0_0_35px_rgba(0,255,255,.15)]">

        {/* Title */}

        <h2 className="text-center text-3xl font-bold tracking-widest text-cyan-300 mb-6">
          JWT SUMMARY
        </h2>

        {/* Process */}

        <div className="space-y-4">

          <div className="rounded-xl border border-pink-500/40 p-4 bg-pink-500/10">
            <h3 className="text-pink-400 font-bold text-xl mb-2">
              Header
            </h3>

            <p className="text-gray-300 text-sm mb-2">
              Stores metadata describing the token.
            </p>

            <pre className="text-pink-200 text-xs whitespace-pre-wrap">
              {header}
            </pre>
          </div>

          <div className="rounded-xl border border-indigo-500/40 p-4 bg-indigo-500/10">
            <h3 className="text-indigo-300 font-bold text-xl mb-2">
              Payload
            </h3>

            <p className="text-gray-300 text-sm mb-2">
              Contains claims about the user and application.
            </p>

            <pre className="text-indigo-200 text-xs whitespace-pre-wrap">
              {payload}
            </pre>
          </div>

          <div className="rounded-xl border border-green-500/40 p-4 bg-green-500/10">
            <h3 className="text-green-400 font-bold text-xl mb-2">
              Signature
            </h3>

            <p className="text-gray-300 text-sm mb-2">
              Created by hashing the encoded Header and Payload using the
              server's secret key.
            </p>

            <div className="text-green-300 text-sm">
              Secret Key:
            </div>

            <div className="font-mono text-green-200 text-xs break-all">
              {secret}
            </div>
          </div>

        </div>

        {/* Divider */}

        <div className="my-6 border-t border-cyan-500/30"></div>

        {/* Summary */}

        <div className="space-y-3">

          <h3 className="text-cyan-300 text-2xl font-bold">
            JWT Creation Flow
          </h3>

          <div className="text-gray-300 text-sm leading-7">

            <p>
              ✅ Header → Base64URL Encode
            </p>

            <p>
              ✅ Payload → Base64URL Encode
            </p>

            <p>
              ✅ Combine:
            </p>

            <div className="ml-6 font-mono text-cyan-300">
              Header.Payload
            </div>

            <p className="mt-2">
              ✅ Generate Signature
            </p>

            <div className="ml-6 font-mono text-green-300">
              HMAC SHA256(Header.Payload, Secret)
            </div>

            <p className="mt-2">
              ✅ Final JWT
            </p>

            <div className="ml-6 font-mono text-yellow-300">
              Header.Payload.Signature
            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">

          <h3 className="text-cyan-300 font-bold mb-2">
            Key Takeaways
          </h3>

          <ul className="text-gray-300 text-sm  px-2 ">
            <li>JWT is digitally signed, not encrypted.</li>
            <li>Header and Payload can be decoded by anyone.</li>
            <li>Only the server knows the Secret Key.</li>
            <li>The Signature protects the token from tampering.</li>
            <li>If any part changes, the signature becomes invalid.</li>
          </ul>

        </div>

      </div>
    </Html>
  );
}

export default JWTSummaryCard;