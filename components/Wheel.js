"use client";

import { useState, useEffect } from "react";
import { SLOTS } from "../app/data/slots";

export default function Wheel({ onSlotSelected }) {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const TOTAL_SEGMENTS = SLOTS.length || 200;

  const playSpinSound = () => {
    const audio = new Audio("/spin.mp3");
    audio.volume = 0.9;
    audio.play().catch(() => {});
  };

  const playWinSound = () => {
    const audio = new Audio("/win.wav");
    audio.volume = 0.9;
    audio.play().catch(() => {});
  };

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    playSpinSound();

    const nextSlot = SLOTS[Math.floor(Math.random() * SLOTS.length)];

    const extraTurns = 3 + Math.floor(Math.random() * 3); // 3–5 turns
    const randomOffset = Math.floor(Math.random() * 360);
    const nextAngle = angle + extraTurns * 360 + randomOffset;
    setAngle(nextAngle);

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedSlot(nextSlot);
      setShowModal(true);
      if (onSlotSelected) onSlotSelected(nextSlot);
      playWinSound();
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

  const closeModalAndMaybeSpin = (spinAgain = false) => {
    setShowModal(false);
    if (spinAgain) {
      setTimeout(() => handleSpin(), 150);
    }
  };

  return (
    <>
      {/* wheel + CTA */}
      <div className="flex flex-col items-center gap-5">
        {/* Wheel */}
        <div
          className={`relative h-80 w-80 md:h-96 md:w-96 cursor-pointer select-none transition-transform duration-300 ${
            isSpinning ? "scale-105" : "scale-100"
          }`}
          onClick={handleSpin}
        >
          {/* pointer */}
          <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-white/90 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]" />

          {/* rotating ring */}
          <div
            className={`absolute inset-0 rounded-full p-[10px] shadow-[0_22px_55px_rgba(0,0,0,0.9)] transition-transform duration-[1500ms] ease-out ${
              isSpinning ? "brightness-110" : ""
            }`}
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="relative h-full w-full rounded-full bg-[conic-gradient(from_220deg_at_50%_50%,#22d3ee,#6366f1,#a855f7,#ec4899,#f97316,#22c55e,#22d3ee)]">
              {/* inner dark circle */}
              <div className="absolute inset-[14px] rounded-full bg-black/90" />

              {/* tick marks */}
              <div className="absolute inset-[8px] rounded-full">
                {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => {
                  const rotation = (360 / TOTAL_SEGMENTS) * i;
                  return (
                    <div
                      key={i}
                      className="absolute inset-0"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 top-[4px] h-[12px] w-[1px] bg-white/35" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* center disc (static) */}
          <div className="absolute inset-[40px] md:inset-[46px] rounded-full bg-black/95 flex flex-col items-center justify-center text-center px-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
              WhichSlot
            </p>
            <p className="text-xs md:text-sm font-semibold text-white line-clamp-2">
              {centerLabel}
            </p>
            <p className="mt-1 text-[10px] text-gray-400">{centerSub}</p>
          </div>
        </div>

        {/* Spin button */}
        <button
          type="button"
          onClick={handleSpin}
          disabled={isSpinning}
          className="rounded-full bg-[#a855f7] px-10 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.9)] hover:brightness-110 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {isSpinning ? "Spinning…" : "Spin the wheel"}
        </button>
      </div>

      {/* RESULT MODAL */}
      {selectedSlot && showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-black/90 to-black/95 px-5 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out scale-100">
            {/* close (X) */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-xs text-gray-200 hover:bg-white/20"
            >
              ✕
            </button>

            <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-300 mb-2">
              Slot selected
            </p>

            <h2 className="text-xl font-bold text-white leading-tight mb-1">
              {selectedSlot.name}
            </h2>
            {selectedSlot.provider && (
              <p className="text-xs text-gray-300 mb-3">
                by {selectedSlot.provider}
              </p>
            )}

            {selectedSlot.tags && selectedSlot.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1.5">
                {selectedSlot.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/50 px-2 py-1 text-[10px] text-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <p className="text-[11px] text-gray-400 mb-4">
              You can open this slot at a supported casino, or spin again if
              you&apos;d like another suggestion.
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  handlePlay();
                  setShowModal(false);
                }}
                className="flex-1 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-[0_0_22px_rgba(16,185,129,0.9)] hover:brightness-110 active:scale-95 transition"
              >
                Play now
              </button>
              <button
                type="button"
                onClick={() => closeModalAndMaybeSpin(true)}
                className="rounded-lg border border-white/20 px-3 py-2 text-[11px] text-gray-200 hover:bg-white/5 active:scale-95 transition"
              >
                Spin again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
