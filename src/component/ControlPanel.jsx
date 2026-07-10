import React, { useEffect } from "react";
import {
  Play,
  Pause,
  SkipForward,
  RotateCcw,
} from "lucide-react";

function ControlPanel({
  isPlaying,
  setIsPlaying,
  currentStep,
  setCurrentStep,
}) {
  const maxStep = 5;

  // Auto Play
  useEffect(() => {
    if (!isPlaying) return;

    if (currentStep >= maxStep) {
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 5500); // 5.5 seconds per step

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep]);

  function nextStep() {
    if (currentStep < maxStep) {
      setCurrentStep((prev) => prev + 1);
    }
  }

  function reset() {
    setCurrentStep(0);
    setIsPlaying(false);
  }

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[430px] rounded-xl border border-cyan-400/30 bg-black/40 backdrop-blur-md  shadow-[0_0_25px_rgba(0,255,255,0.15)]">

      <h2 className="text-center text-cyan-300 text-lg font-bold tracking-widest mb-5">
        CONTROL PANEL
      </h2>

      <div className="flex justify-center gap-6">

        {/* Play / Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400/20 transition"
        >
          {isPlaying ? (
            <Pause className="text-cyan-300" size={24} />
          ) : (
            <Play className="text-cyan-300" size={24} />
          )}
        </button>

        {/* Next */}
        <button
          onClick={nextStep}
          className="w-12 h-12 rounded-full border border-pink-400 flex items-center justify-center hover:bg-pink-400/20 transition"
        >
          <SkipForward className="text-pink-300" size={24} />
        </button>

        {/* Reset */}
        <button
          onClick={reset}
          className="w-12 h-12 rounded-full border border-green-400 flex items-center justify-center hover:bg-green-400/20 transition"
        >
          <RotateCcw className="text-green-300" size={24} />
        </button>

      </div>

      {/* Current Step */}
      <div className="mt-5 text-center">
        <p className="text-gray-400 text-sm">
          Current Step
        </p>

        <h3 className="text-cyan-300 text-xl font-bold mt-1">
          {currentStep} / {maxStep}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {[
            "Input",
            "Header Encoding",
            "Payload Encoding",
            "Signature Generation",
            "JWT Assembly",
          ][currentStep]}
        </p>
      </div>

      {/* Progress */}
      <div className="mt-4 h-2 rounded-full bg-gray-800 overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all duration-500"
          style={{
            width: `${(currentStep / maxStep) * 100}%`,
          }}
        />
      </div>

    </div>
  );
}

export default ControlPanel;