"use client";

import { useState, useEffect, useRef } from "react";
import { SLOTS } from "@/app/data/slots";

export default function Wheel() {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [previewSlot, setPreviewSlot] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const tickerRef = useRef(null);

  const playSpinSound = () => {
    const audio = new Audio("/spin.mp3");
    audio.volume = 0.6;
    audio.play().catch(() => {});
  };

  const playWinSound = () => {
    const audio = new Audio("/win.wav");
    audio.volume = 0.8;
    audio.play().catch(() => {});
  };

  const getRandomSlot = () =>
    SLOTS[Math.floor(Math.random() * SLOTS.length)];

  const handleSpin = () => {
    if (isSpinning || SLOTS.length === 0) return;

    setIsSpinning(true);
    setShowResult(false);

    const targetSlot = getRandomSlot();
    setPreviewSlot(targetSlot);

    playSpinSound();

    const extraTurns = 3; // 3 polni obrati
    const randomOffset = Math.floor(Math.random() * 360);
    setAngle((prev) => prev + extraTurns * 360 + randomOffset);

    // hitro menjavanje imen med spinom (feeling slot machine)
    tickerRef.current = window.setInterval(() => {
      setPreviewSlot(getRandomSlot());
    }, 80);

    window.setTimeout(() => {
      if (tickerRef.current) {
        clearInterval(tickerRef.current);
        tickerRef.current = null;
      }
      setSelectedSlot(targetSlot);
      setPreviewSlot(targetSlot);
      setIsSpinning(false);
      playWinSound();
      setShowResult(true);
    }, 1700);
  };

  useEffect(() => {
    return () => {
      if (tickerRef.current) {
        clearInterval(tickerRef.current);
      }
    };
  }, []);

  const handlePlay = () => {
    const slot = selectedSlot || previewSlot;
    if (!slot) return;

    const url =
      slot.affiliate?.default || "https://bzstarz1.com/boe5tub8a";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const displaySlot = previewSlot || selectedSlot;

  return (
    <div className="flex flex-col items-center gap-6">

      {/* WHEEL */}
      <div
        className="relative h-[320px] w-[320px] md:h-[380px] md:w-[380px] cursor-pointer select-none"
        onClick={handleSpin}
      >
        {/* ambient glow */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(94,234,212,0.25),transparent_55%),radial-gradient(circle_at_70%_100%,rgba(244,114,182,0.25),transparent_55%)] blur-xl" />

        {/* pointer */}
        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[11px] border-r-[11px] border-b-[17px] border-l-transparent border-r-transparent border-b-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />

        {/* spinning disc */}
        <div
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_220deg_at_50%_50%,#22d3ee,#6366f1,#a855f7,#ec4899,#f97316,#22c55e,#22d3ee)] p-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.85)] transition-transform duration-[1600ms] ease-out"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="h-full w-full rounded-full bg-black/90 flex items-center justify-center">
            {/* inner glow ring */}
            <div className="relative h-[86%] w-[86%] rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(148,163,184,0.45),transparent_62%)] flex items-center justify-center">
              <div className="absolute inset-[20%] rounded-full border border-white/5" />

              {/* center disc */}
              <div className="relative h-[68%] w-[68%] rounded-full bg-black/95 flex flex-col items-center justify-center text-center px-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
                  WhichSlot
                </p>
                <p className="text-sm font-semibold text-white line-clamp-2">
                  {isSpinning
                    ? "Spinning…"
                    : displaySlot?.name || "Tap to spin"}
                </p>
                <p className="mt-1 text-[11px] text-gray-400">
                  {isSpinning
                    ? "Finding a slot for you"
                    : displaySlot?.provider || "Let WhichSlot decide"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN SPIN BUTTON */}
      <button
        type="button"
        onClick={handleSpin}
        disabled={isSpinning}
        className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-10 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(217,70,239,0.6)] hover:brightness-110 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {isSpinning ? "Spinning…" : "Spin the wheel"}
      </button>

      {/* COMPACT RESULT CARD POD WHEEL */}
      {displaySlot && (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.8)] text-left text-sm text-gray-200">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1">
            Selected slot
          </p>

          <p className="text-base font-semibold text-white">
            {displaySlot.name}
          </p>

          {displaySlot.provider && (
            <p className="text-xs text-gray-400 mb-2">
              {displaySlot.provider}
            </p>
          )}

          {/* mini play now chip */}
          <button
            type="button"
            onClick={handlePlay}
            className="inline-flex items-center rounded-md bg-emerald-500/90 hover:bg-emerald-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-md active:scale-95 transition"
          >
            Play now
          </button>

          {displaySlot.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {displaySlot.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-black/40 px-2 py-1 text-[10px] text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={handlePlay}
              className="flex-1 rounded-lg bg-emerald-500/80 hover:bg-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.7)] active:scale-95 transition"
            >
              Play now in new tab
            </button>
            <button
              type="button"
              onClick={handleSpin}
              className="rounded-lg border border-white/20 px-3 py-2 text-[11px] text-gray-200 hover:bg-white/5 active:scale-95 transition"
              disabled={isSpinning}
            >
              Spin again
            </button>
          </div>
        </div>
      )}

      {/* RESULT MODAL */}
      {showResult && selectedSlot && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-emerald-400/50 bg-[#020617]/95 px-5 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300 mb-2">
              Your slot
            </p>
            <h2 className="text-xl font-semibold text-white mb-1">
              {selectedSlot.name}
            </h2>
            {selectedSlot.provider && (
              <p className="text-xs text-gray-400 mb-3">
                {selectedSlot.provider}
              </p>
            )}

            {selectedSlot.tags?.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1.5">
                {selectedSlot.tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={handlePlay}
                className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(16,185,129,0.9)] active:scale-95 transition"
              >
                Play now
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowResult(false);
                  handleSpin();
                }}
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-gray-100 hover:bg-white/10 active:scale-95 transition"
              >
                Spin again
              </button>
              <button
                type="button"
                onClick={() => setShowResult(false)}
                className="mt-1 w-full text-[11px] text-gray-400 hover:text-gray-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
