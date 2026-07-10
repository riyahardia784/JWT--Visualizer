import React, { useState } from "react";
import Floor from "./component/Floor";
import JWTScene from "./component/JWTScene";
import JWTSummaryScene from "./component/JWTSummaryScene";
import ProcessPanel from "./component/ProcessPanel";
import ControlPanel from "./component/ControlPanel";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [header, setHeader] = useState(`{
  "alg":"HS256",
  "typ":"JWT"
}`);

  const [payload, setPayload] = useState(`{
  "sub":"12345",
  "name":"John Doe",
  "role":"Admin"
}`);

  const [secret, setSecret] = useState("my-secret-key");

  const encodedHeader = btoa(header)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const encodedPayload = btoa(payload)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const signature =
    "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  const token =
    `${encodedHeader}.${encodedPayload}.${signature}`;

  return (
    <div>
      <Floor currentStep={currentStep}>
        {currentStep < 5 ? (
          <JWTScene
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}

            header={header}
            payload={payload}
            secret={secret}

            setHeader={setHeader}
            setPayload={setPayload}
            setSecret={setSecret}
          />
        ) : (
          <JWTSummaryScene
            token={token}
            header={header}
            payload={payload}
            secret={secret}
          />
        )}
      </Floor>

      <ProcessPanel currentStep={currentStep} />

      <ControlPanel
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
}

export default App;