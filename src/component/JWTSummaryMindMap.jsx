import React from "react";
import { Html, Line } from "@react-three/drei";

function Node({ position, title, color }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <Html center distanceFactor={10}>
        <div
          className="px-3 py-1 rounded-lg text-white text-[30px] font-bold "
          style={{
            background: color,
            boxShadow: `0 0 20px ${color}`,
          }}
        >
          {title}
        </div>
      </Html>
    </group>
  );
}

function JWTSummaryMindMap({ position = [-25, 10, 1] }) {
  return (
    <group position={position}>
      
      {/* Center */}
      <Node
        position={[0, 0, 0]}
        title="JWT"
        color="#00FFFF"
      />

      {/* Left */}
      <Node
        position={[-5, 3, 0]}
        title="Header"
        color="#FF69B4"
      />

      <Node
        position={[-5, -3, 0]}
        title="Payload"
        color="#857df1"
      />

      {/* Right */}
      <Node
        position={[5, 3, 0]}
        title="Signature"
        color="#14b41f"
      />

      <Node
        position={[5, -3, 0]}
        title="Verification"
        color="#f59e0b"
      />

      {/* Bottom */}
      <Node
        position={[0, -6, 0]}
        title="Authentication"
        color="#06b6d4"
      />

      {/* Top */}
      <Node
        position={[0, 6, 0]}
        title="Base64URL Encode"
        color="#ec4899"
      />

      {/* Lines */}

      <Line
        points={[
          [0, 0, 0],
          [-5, 3, 0],
        ]}
        color="#FF69B4"
        lineWidth={2}
      />

      <Line
        points={[
          [0, 0, 0],
          [-5, -3, 0],
        ]}
        color="#857df1"
        lineWidth={2}
      />

      <Line
        points={[
          [0, 0, 0],
          [5, 3, 0],
        ]}
        color="#14b41f"
        lineWidth={2}
      />

      <Line
        points={[
          [0, 0, 0],
          [5, -3, 0],
        ]}
        color="#f59e0b"
        lineWidth={2}
      />

      <Line
        points={[
          [0, 0, 0],
          [0, 6, 0],
        ]}
        color="#ec4899"
        lineWidth={2}
      />

      <Line
        points={[
          [0, 0, 0],
          [0, -6, 0],
        ]}
        color="#06b6d4"
        lineWidth={2}
      />

      <Html center position={[20, 10, 0]}>
        <div className="  text-cyan-300 text-4xl font-bold whitespace-nowrap">
          JWT Complete Flow
        </div>
      </Html>
    </group>
  );
}

export default JWTSummaryMindMap;