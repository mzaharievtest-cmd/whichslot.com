"use client";

import { useState } from "react";
import { SLOTS } from "../data/slots";

export default function Wheel({ onSlotSelected }) {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    // pick a random slot
    const nextSlot = SLOTS[Math.floor(Math.random() * SLOTS.length)];

    // random spin between 3 and 5 full turns
    const extraTurns = 3 + Math.floor(Math.random() * 3);
    const randomOffset = Math.floor(Math.random() * 360);
    const nextAngle = angle + extraTurns * 360 + randomOffset;
    setAngle(nextAngle);

    // fake spin duration to match CSS transition (e.g. 1500ms)
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedSlot(nextSlot);
      if (onSlotSelected) onSlotSelected(nextSlot);
    }, 1600);
  };

  const handlePlay = () => {
    if (!selectedSlot) return;
    const url =
      selectedSlot.affiliate?.default || "https://bzstarz1.com/boe5tub8a";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const centerLabel = (() => {
    if (isSpinning) return "Spinning…";
    if (selectedSlot) return selectedSlot.name;
    return "Random slot";
  })();

  const centerSub = (() => {
    if (isSpinning) return "Tap to spin again";
    if (selectedSlot) return selectedSlot.provider || "Selected slot";
    return "Tap to spin";
  })();

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Wheel clickable area */}
      <div
        className="relative h-72 w-72 md:h-80 md:w-80 cursor-pointer select-none"
        onClick={handleSpin}
      >
        {/* pointer/chevron – pointing down INTO the wheel */}
        <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-white/80 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]" />

        {/* spinning disc */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#22d3ee] via-[#8b5cf6] to-[#f97316] p-[10px] shadow-[0_18px_45px_rgba(0,0,0,0.9)] transition-transform duration-[1500ms] ease-out"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="h-full w-full rounded-full bg-black/80 flex items-center justify-center">
            {/* inner ring */}
            <div className="relative h-[82%] w-[82%] rounded-full bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center">
              {/* center disc */}
              <div className="h-[72%] w-[72%] rounded-full bg-black/90 flex flex-col items-center justify-center text-center px-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">
                  WhichSlot
                </p>
                <p className="text-xs md:text-sm font-semibold text-white line-clamp-2">
                  {centerLabel}
                </p>
                <p className="mt-1 text-[10px] text-gray-400">{centerSub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spin button */}
      <button
        type="button"
        onClick={handleSpin}
        disabled={isSpinning}
        className="rounded-full bg-[#a855f7] px-8 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.9)] hover:brightness-110 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {isSpinning ? "Spinning…" : "Spin the wheel"}
      </button>

      <p className="text-[11px] text-gray-500">
        Press <span className="font-semibold text-gray-300">Spin the wheel</span>{" "}
        or tap the wheel to get a suggestion.
      </p>

      {/* Result card */}
      {selectedSlot && (
        <div className="mt-2 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 text-sm text-gray-200 shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400 mb-1">
            Selected slot
          </p>
          <div className="flex flex-col gap-1">
            <div>
              <p className="font-semibold text-white text-base leading-tight">
                {selectedSlot.name}
              </p>
              {selectedSlot.provider && (
                <p className="text-xs text-gray-400">{selectedSlot.provider}</p>
              )}
            </div>

            {selectedSlot.tags && selectedSlot.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selectedSlot.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[10px] text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={handlePlay}
                className="flex-1 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.8)] hover:brightness-110 active:scale-95 transition"
              >
                Play now
              </button>
              <button
                type="button"
                onClick={handleSpin}
                className="rounded-lg border border-white/15 px-3 py-2 text-[11px] text-gray-200 hover:bg-white/5 active:scale-95 transition"
              >
                Spin again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
