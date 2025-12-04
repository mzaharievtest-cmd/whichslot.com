"use client";

import { useState } from "react";
import { SLOTS } from "../data/slots";

export default function Wheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    if (isSpinning || SLOTS.length === 0) return;

    setIsSpinning(true);
    setResult(null);

    const slice = 360 / SLOTS.length;
    const targetIndex = Math.floor(Math.random() * SLOTS.length);
    const chosenAngle = slice * targetIndex + slice / 2;
    const spins = 5;
    const targetRotation = spins * 360 + chosenAngle;

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResult(SLOTS[targetIndex]);
    }, 3000);
  };

  const handlePlayNow = () => {
    if (!result) return;
    const url =
      result.affiliate?.default || "https://bzstarz1.com/boe5tub8a";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Wheel */}
      <div className="relative flex items-center justify-center">
        {/* pointer */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-b-[22px] border-l-transparent border-r-transparent border-b-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
        </div>

        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full flex items-center justify-center border border-white/15 bg-dark overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
          {/* main gradient disc */}
          <div
            className="absolute inset-2 rounded-full"
            style={{
              background:
                "conic-gradient(from 270deg, #4BB8F9, #A259FF, #F4C542, #4BB8F9)",
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning
                ? "transform 2.8s cubic-bezier(0.13, 0.67, 0.23, 0.98)"
                : "transform 0.2s ease-out",
            }}
          />

          {/* tick marks */}
          {SLOTS.map((slot, index) => {
            const slice = 360 / SLOTS.length;
            const angle = slice * index;
            return (
              <div
                key={slot.id}
                className="absolute inset-4"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-white/60" />
              </div>
            );
          })}

          {/* center hub */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-dark flex flex-col items-center justify-center border border-white/25">
            <span className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
              WhichSlot
            </span>
            <span className="mt-1 text-sm font-semibold text-white">
              Random slot
            </span>
            <span className="mt-2 text-[11px] text-gray-400">
              {isSpinning ? "Spinning..." : "Tap to decide"}
            </span>
          </div>
        </div>
      </div>

      {/* Spin button */}
      <div className="flex gap-3">
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="inline-flex items-center justify-center rounded-xl bg-neonPurple px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_0_30px_rgba(162,89,255,0.85)] hover:brightness-110 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSpinning ? "Spinning..." : "Spin the wheel"}
        </button>

        {result && (
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-gray-100 hover:bg-white/5 active:scale-95 transition"
          >
            Spin again
          </button>
        )}
      </div>

      {/* Result card */}
      <div className="w-full max-w-md">
        {result ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-[0_20px_55px_rgba(0,0,0,0.85)]">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
                  Your slot
                </p>
                <p className="text-lg font-semibold text-white">
                  {result.name}
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  {result.provider}
                </p>
              </div>
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

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePlayNow}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(16,185,129,0.8)] hover:brightness-110 active:scale-95 transition"
              >
                Play now at BitStarz
              </button>

              <button
                onClick={handleSpin}
                disabled={isSpinning}
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-gray-100 hover:bg-white/5 active:scale-95 transition"
              >
                Spin again
              </button>
            </div>

            <p className="mt-3 text-[11px] text-gray-400">
              &quot;Play now&quot; opens BitStarz in a new tab. We may earn a commission
              when you sign up or play.
            </p>
          </div>
        ) : (
          <p className="text-xs text-gray-400 text-center">
            Press <strong>Spin the wheel</strong> to get a suggestion.
          </p>
        )}
      </div>
    </div>
  );
}
