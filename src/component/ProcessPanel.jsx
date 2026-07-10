import React from "react";

const steps = [
   "Input",
  "Create Header",
  "Create Payload",
  "Generate Signature",
  "Build JWT",
  "Summary"
];

function ProcessPanel({ currentStep }) {
  return (
    <div className="absolute left-8 bottom-2 w-72 rounded-xl border border-cyan-400/40 bg-black/35 backdrop-blur-md p-5 shadow-[0_0_25px_rgba(0,255,255,0.15)]">

      <h2 className="text-cyan-300 text-2xl font-bold tracking-widest mb-5">
        PROCESS
      </h2>

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">

            {/* Circle */}
            <div
              className={`
                w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold
                ${
                  index < currentStep
                    ? "bg-green-500 text-black"
                    : index === currentStep
                    ? "bg-cyan-400 text-black shadow-[0_0_15px_#22d3ee]"
                    : "border border-gray-500 text-gray-400"
                }
              `}
            >
              {index < currentStep ? "✓" : index + 1}
            </div>

            {/* Step Name */}
            <div
              className={`font-medium ${
                index === currentStep
                  ? "text-cyan-300"
                  : index < currentStep
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
            >
              {step}
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Progress</span>
          <span>{Math.round((currentStep / (steps.length - 1)) * 100)}%</span>
        </div>

        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-500"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

      </div>

    </div>
  );
}

export default ProcessPanel;