"use client";

import { useState } from "react";

const SLOTS = [
  { id: 1, name: "Gates of Olympus", provider: "Pragmatic Play", tags: ["High Volatility", "Bonus Buy"] },
  { id: 2, name: "Sweet Bonanza", provider: "Pragmatic Play", tags: ["Tumbles", "Free Spins"] },
  { id: 3, name: "Book of Dead", provider: "Play’n GO", tags: ["Classic", "High Volatility"] },
  { id: 4, name: "Big Bass Bonanza", provider: "Pragmatic Play", tags: ["Fishing", "Free Spins"] },
  { id: 5, name: "Reactoonz", provider: "Play’n GO", tags: ["Cluster Pays", "Medium/High"] },
  { id: 6, name: "Money Train 4", provider: "Relax Gaming", tags: ["Bonus Buy", "Very High"] },
  { id: 7, name: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", tags: ["Super High", "Bonus Buy"] },
  { id: 8, name: "Sugar Rush", provider: "Pragmatic Play", tags: ["Multiplier", "Grid"] },
];

export default function Wheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    const slice = 360 / SLOTS.length;
    const targetIndex = Math.floor(Math.random() * SLOTS.length);
    const chosenAngle = slice * targetIndex + slice / 2;
    const spins = 6;
    const targetRotation = spins * 360 + chosenAngle;

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResult(SLOTS[targetIndex]);
    }, 3200);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* wheel */}
      <div className="relative flex items-center justify-center">
        {/* animated glow background */}
        <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.8),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.7),_transparent_60%)] opacity-80 blur-3xl animate-glow-pulse" />

        {/* pointer */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[26px] border-l-transparent border-r-transparent border-b-white drop-shadow-[0_0_14px_rgba(255,255,255,0.9)] animate-wiggle" />
        </div>

        <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full flex items-center justify-center border border-white/20 overflow-hidden bg-dark shadow-[0_40px_90px_rgba(0,0,0,0.9)]">
          {/* outer subtle spinning ring */}
          <div className="absolute inset-2 rounded-full border border-white/10 animate-spin-slow" />

          {/* main gradient disc – rotated via state */}
          <div
            className="absolute inset-4 rounded-full"
            style={{
              background:
                "conic-gradient(from 270deg, #4BB8F9, #A259FF, #F4C542, #4BB8F9)",
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning
                ? "transform 3.1s cubic-bezier(0.12, 0.72, 0.11, 1.02)"
                : "transform 0.2s ease-out",
            }}
          />

          {/* tick marks for each slice */}
          {SLOTS.map((slot, index) => {
            const slice = 360 / SLOTS.length;
            const angle = slice * index;
            return (
              <div
                key={slot.id}
                className="absolute inset-5"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="absolute left-1/2 top-0 h-5 w-[1px] -translate-x-1/2 bg-white/60" />
              </div>
            );
          })}

          {/* center hub */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-dark flex flex-col items-center justify-center border border-white/30 shadow-[0_0_25px_rgba(15,23,42,0.95)]">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
              WhichSlot
            </span>
            <span className="mt-1 text-sm font-semibold text-white">
              Random Slot
            </span>
            <span className="mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-200">
              {isSpinning ? "Spinning..." : "Tap spin to choose"}
            </span>
          </div>

          {/* small orbiting lights just for life */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-full h-full">
              <span className="absolute left-1/2 -translate-x-1/2 -top-1 h-2 w-2 rounded-full bg-neonBlue shadow-[0_0_10px_rgba(59,130,246,0.9)] animate-orbit" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(244,197,66,0.9)] animate-orbit" />
              <span className="absolute left-4 bottom-6 h-2 w-2 rounded-full bg-neonPurple shadow-[0_0_10px_rgba(162,89,255,0.9)] animate-orbit" />
            </div>
          </div>
        </div>
      </div>

      {/* spin button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className="inline-flex items-center justify-center rounded-xl bg-neonPurple px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_0_35px_rgba(162,89,255,0.95)] hover:brightness-110 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>

      {/* result card */}
      <div className="w-full max-w-md">
        {result ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-all duration-300">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
                  Result
                </p>
                <p className="text-lg font-semibold text-white">
                  {result.name}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-dark px-3 py-1 text-xs text-gray-200 border border-white/10">
                {result.provider}
              </span>
            </div>
            {result.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {result.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-dark px-2.5 py-1 text-[11px] text-gray-200 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="mt-3 text-xs text-gray-400">
              V končni verziji boš tu imel RTP, volatilnost, feature badge-e in
              gumbe <strong>Play now</strong> z geo-targeted affiliate linki.
            </p>
          </div>
        ) : (
          <p className="text-xs text-gray-400 text-center">
            Pritisni <strong>Spin the Wheel</strong> in WhichSlot ti bo izbral
            naključni slot.
          </p>
        )}
      </div>
    </div>
  );
}
