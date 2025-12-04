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
  { id: 8, name: "Sugar Rush", provider: "Pragmatic Play", tags: ["Multiplier", "Grid"] }
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

    // Angle so that the chosen slice ends up under the pointer at 0deg
    const chosenAngle = slice * targetIndex + slice / 2;
    const spins = 5; // full rotations
    const targetRotation = spins * 360 + chosenAngle;

    setRotation(targetRotation);

    // Match CSS transition duration (~3s)
    setTimeout(() => {
      setIsSpinning(false);
      setResult(SLOTS[targetIndex]);
    }, 3100);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Wheel container */}
      <div className="relative flex items-center justify-center">
        {/* Glow */}
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(162,89,255,0.7),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.5),_transparent_60%)] opacity-70 blur-3xl" />

        {/* Pointer */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
        </div>

        {/* Rotating wheel */}
        <div
          className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full flex items-center justify-center border border-white/20 overflow-hidden bg-dark"
        >
          {/* conic gradient segments */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 270deg, #4BB8F9, #A259FF, #F4C542, #4BB8F9)",
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning
                ? "transform 3s cubic-bezier(0.12, 0.72, 0.11, 1.02)"
                : "none"
            }}
          />

          {/* central hub */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-dark flex flex-col items-center justify-center border border-white/30 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
              WhichSlot
            </span>
            <span className="mt-1 text-sm font-semibold text-white">
              Random Slot
            </span>
          </div>

          {/* tick marks for slices */}
          {SLOTS.map((slot, index) => {
            const slice = 360 / SLOTS.length;
            const angle = slice * index;
            return (
              <div
                key={slot.id}
                className="absolute inset-4"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="absolute left-1/2 top-0 h-5 w-[1px] -translate-x-1/2 bg-white/50" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Spin button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className="inline-flex items-center justify-center rounded-xl bg-neonPurple px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_0_25px_rgba(162,89,255,0.7)] hover:brightness-110 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSpinning ? "Spinning..." : "Spin"}
      </button>

      {/* Result card */}
      <div className="w-full max-w-md">
        {result ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
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
              In the full version, this card will show RTP, volatility, and
              direct affiliate links to casinos that offer this slot in your
              country.
            </p>
          </div>
        ) : (
          <p className="text-xs text-gray-400 text-center">
            Hit <strong>Spin</strong> to get a random slot suggestion.
          </p>
        )}
      </div>
    </div>
  );
}
