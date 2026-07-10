import React from "react";
import { Html } from "@react-three/drei";

function InfoCard({
  position = [0, 2, 0],
  width = 6,
  height=4.8,
  data,
}) {
  const color = data?.color || "#10c1cb";
  const lineThickness = 0.02;

  return (
    <group position={position} >
      {/* Top */}
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[width, lineThickness, lineThickness]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {/* Bottom */}
      <mesh position={[0, -height / 2, 0]}>
        <boxGeometry args={[width, lineThickness, lineThickness]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {/* Left */}
      <mesh position={[-width / 2, 0, 0]}>
        <boxGeometry args={[lineThickness, height, lineThickness]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {/* Right */}
      <mesh position={[width / 2, 0, 0]}>
        <boxGeometry args={[lineThickness, height, lineThickness]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {/* Glass */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[width - 0.02, height - 0.02]} />
        <meshBasicMaterial
          color="#040414"
          transparent
          opacity={0.45}
        />
      </mesh>

      <Html
        transform
        distanceFactor={4}
        position={[0, 0, 0.03]}
      >
        <div
          style={{
           width:"420px",
            color: "white",
            fontFamily: "Inter, sans-serif",
            padding: "2px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* Title */}
          <h1
            style={{
              color,
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: "3px",
              margin: 0,
              textShadow: `0 0 15px ${color}`,
            }}
          >
            {data.title}
          </h1>

          {/* Fields */}
          <div
            style={{
              border: `1px solid ${color}`,
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            {data.fields.map((field) => (
              <div
                key={field.key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  fontSize: "15px",
                }}
              >
                <span style={{ color }}>{field.key}</span>
                <span>{field.value}</span>
              </div>
            ))}
          </div>

          {/* Explanation */}
          <div>
            <h3
              style={{
                color,
                marginBottom: "6px",
              }}
            >
              Explanation
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                opacity: 0.9,
              }}
            >
              {data.explanation}
            </p>
          </div>

          {/* Formula (Signature only) */}
          {data.formula && (
            <div
              style={{
                border: `1px solid ${color}`,
                borderRadius: "8px",
                padding: "10px",
                fontSize: "13px",
                color,
              }}
            >
              {data.formula}
            </div>
          )}

          {/* Did You Know */}
          <div
            style={{
              borderLeft: `4px solid ${color}`,
              paddingLeft: "10px",
              fontSize: "12px",
              opacity: 0.9,
              
            }}
          >
            <strong style={{ color }}>Did You Know?</strong>
            <br />
            {data.didYouKnow}
          </div>
        </div>
      </Html>
    </group>
  );
}

export default InfoCard;