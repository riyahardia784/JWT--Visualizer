import { useState } from "react";
import HeaderCube from "./HeaderCube";
import Payload from "./Payload";
import Signature from "./Signature";
import InfoCard from "./InfoCard";
import ConnectionLine from "./ConnectionLine";
import InputPanel from "./InputPanel";
import { jwtData } from "../data/jwtData";
import { Html } from "@react-three/drei";
import JWTBuilderCube from "./JWTBuilderCube";


function JWTScene({   currentStep,
  setCurrentStep,

  header,
  payload,
  secret,

  setHeader,
  setPayload,
  setSecret }) {

  const [selected, setSelected] = useState(null);


  const modes = {
    header:
      currentStep === 1
        ? "encode"
        : currentStep === 4
        ? "decode"
        : "raw",

    payload:
      currentStep === 2
        ? "encode"
        : currentStep === 4
        ? "decode"
        : "raw",

    signature:
      currentStep === 3
        ? "generate"
        : "idle",
  };

  const infoPositions = {
    header: [-10.5, 0.2, 0],
    payload: [7.5, 0.2, 0],
    signature: [25.5, 0.2, 0],
    jwt: [43.5, 0.2, 0],


  };

  return (
    <>
      {/* Header */}
      <HeaderCube
        position={[-18, 1, 0]}
        mode={modes.header}
        header={header}
        onExpand={() => {
          setSelected("header");
          setCurrentStep(1);
        }}
      />

      <ConnectionLine
        visible={selected === "header"}
        start={[-16.2, 1, 0]}
        end={[-12, 2.6, 0]}
        color="#FF69B4"
      />

      {/* Payload */}
      <Payload
        position={[0, 1, 0]}
        mode={modes.payload}
        payload={payload}
        onExpand={() => {
          setSelected("payload");
          setCurrentStep(2);
        }}
      />

      <ConnectionLine
        visible={selected === "payload"}
        start={[1.9, 1, 0]}
        end={[6.6, 2.6, 0]}
        color="#857df1"
      />

      {/* Signature */}
      <Signature
        position={[18, 1, 0]}
        mode={modes.signature}
        currentStep={currentStep}
        secret={secret}
        onExpand={() => {
          setSelected("signature");
          setCurrentStep(3);
        }}
      />

      <ConnectionLine
        visible={selected === "signature"}
        start={[19.8, 1, 0]}
        end={[25, 2.6, 0]}
        color="#14b41f"
      />
      <JWTBuilderCube
  position={[36, 2.5, 0]}
  currentStep={currentStep}
  header={header}
  payload={payload}
  secret={secret}
  onExpand={() => {
    setSelected("jwt");
    setCurrentStep(4);
  }}
/>

      {/* Info Card */}
      {selected && (
        <InfoCard
          position={infoPositions[selected]}
          data={jwtData[selected]}
        />
      )}

      {/* Input Panel */}
      {currentStep === 0 && (
         
  <InputPanel
    header={header}
    payload={payload}
    secret={secret}
    setHeader={setHeader}
    setPayload={setPayload}
    setSecret={setSecret}
    onGenerate={() => {
    setCurrentStep(1);      // Go to Header step
      setSelected("header");
    }}
  />
  
)}

 

    </>
  );
}

export default JWTScene;