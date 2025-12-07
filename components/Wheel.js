// components/Wheel.js
"use client";

import { useState, useRef, useEffect } from "react";
import { SLOTS } from "../app/data/slots";

// Subset used for fast preview (preloaded)
// Only visual shuffle uses this; final result still uses all SLOTS.
const PREVIEW_POOL =
  SLOTS.filter((s) => s.image).slice(0, 120) || SLOTS.slice(0, 120);

/**
 * Center preview – only this component re-renders rapidly during spin.
 */
function SlotPreview({ isSpinning, selectedSlot }) {
  const [displayedSlot, setDisplayedSlot] = useState(selectedSlot || null);
  const intervalRef = useRef(null);

  // Preload a limited number of images once (not all 800+)
  useEffect(() => {
    if (typeof window === "undefined") return;

    PREVIEW_POOL.forEach((slot) => {
      if (!slot.image) return;
      const img = new window.Image();
      img.src = slot.image;
    });
  }, []);

  // Shuffle animation during spin (uses only preloaded PREVIEW_POOL)
  useEffect(() => {
    if (isSpinning) {
      intervalRef.current = setInterval(() => {
        const randomSlot =
          PREVIEW_POOL[Math.floor(Math.random() * PREVIEW_POOL.length)];
        setDisplayedSlot(randomSlot);
      }, 45); // faster shuffle (was 70ms)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (selectedSlot) setDisplayedSlot(selectedSlot);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isSpinning, selectedSlot]);

  // TEXT RULES:
  // - default: no label
  // - while spinning: show current slot name + provider
  // - after spin: selected slot name + provider
  let label = "";
  let sub = "";

  if (displayedSlot) {
    label = displayedSlot.name;
    sub = displayedSlot.provider || "";
  }

  return (
    <div className="absolute inset-[50px] sm:inset-[54px] md:inset-[64px] rounded-full bg-black/95 flex flex-col items-center justify-center text-center px-4">
      <p className="text-[10px] uppercase tracking-[0.32em] text-gray-500 mb-2">
        WhichSlot
      </p>

      {/* Slot image OR placeholder */}
      {displayedSlot?.image ? (
        <div className="relative mb-2 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full overflow-hidden border border-white/15 shadow-[0_0_22px_rgba(0,0,0,0.9)]">
          <img
            src={displayedSlot.image}
            alt={displayedSlot.name}
            className="h-full w-full object-cover"
            draggable="false"
          />
        </div>
      ) : (
        <div className="mb-2 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-gray-500">
          Spin
        </div>
      )}

      {/* Main label – only render if we actually have text */}
      {label && (
        <p className="text-xs sm:text-sm font-semibold text-white line-clamp-2">
          {label}
        </p>
      )}

      {/* Provider only if we have a slot */}
      {sub && (
        <p className="mt-1 text-[10px] text-gray-400">
          {sub}
        </p>
      )}
    </div>
  );
}

export default function Wheel({ onSlotSelected }) {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 800+ slots would give a silly number of tick marks,
  // so we cap the visual segments to keep the ring clean.
  const MAX_SEGMENTS = 120;
  const TOTAL_SEGMENTS = Math.min(SLOTS.length || MAX_SEGMENTS, MAX_SEGMENTS);

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

    // GA: wheel spin started
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "spin", {
        event_category: "wheel",
        event_label: "Wheel spin triggered",
      });
    }

    setIsSpinning(true);
    setShowModal(false);
    setSelectedSlot(null);

    playSpinSound();

    // Still choose from ALL slots (800+), not limited
    const nextSlot = SLOTS[Math.floor(Math.random() * SLOTS.length)];

    // 2 full turns + random offset
    const baseTurns = 720;
    const randomOffset = Math.floor(Math.random() * 360);
    const nextAngle = angle + baseTurns + randomOffset;
    setAngle(nextAngle);

    // ~3s for the spin
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedSlot(nextSlot);
      setShowModal(true);
      playWinSound();

      // GA: slot selected
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "slot_selected", {
          event_category: "wheel",
          event_label: nextSlot.name,
          slot_name: nextSlot.name,
          provider: nextSlot.provider || "Unknown",
        });
      }

      if (onSlotSelected) onSlotSelected(nextSlot);
    }, 3000);
  };

  const handlePlay = () => {
    if (!selectedSlot) return;

    // GA: Play now click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "play_now_click", {
        event_category: "engagement",
        event_label: selectedSlot.name,
        slot_name: selectedSlot.name,
        provider: selectedSlot.provider || "Unknown",
      });
    }

    const url =
      selectedSlot.affiliate?.default || "https://bzstarz1.com/boe5tub8a";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const closeModalAndMaybeSpin = (spinAgain = false) => {
    setShowModal(false);
    if (spinAgain) {
      setTimeout(() => handleSpin(), 180);
    }
  };

  return (
    <>
      {/* wheel + CTA */}
      <div className="flex flex-col items-center gap-5">
        {/* Wheel wrapper */}
        <div
          className={`relative h-72 w-72 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px] cursor-pointer select-none transition-transform duration-300 ${
            isSpinning ? "scale-105" : "scale-100"
          }`}
          onClick={handleSpin}
        >
          {/* outer neon aura */}
          <div className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(244,114,182,0.5),transparent_55%),radial-gradient(circle_at_75%_100%,rgba(56,189,248,0.5),transparent_55%)] opacity-60 blur-2xl" />

          {/* pointer / chevron */}
          <div
            className={`pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[18px] border-l-transparent border-r-transparent border-b-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] ${
              isSpinning ? "animate-pointerWiggle" : ""
            }`}
          />

          {/* rotating ring */}
          <div
            className={`absolute inset-0 rounded-full p-[10px] shadow-[0_22px_55px_rgba(0,0,0,0.95)] transition-transform duration-[3000ms] ease-out ${
              isSpinning ? "brightness-110" : ""
            }`}
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="relative h-full w-full rounded-full bg-[conic-gradient(from_210deg_at_50%_50%,#22c55e,#22d3ee,#6366f1,#a855f7,#ec4899,#f97316,#22c55e)]">
              {/* inner black disc */}
              <div className="absolute inset-[16px] rounded-full bg-black/95" />

              {/* tick marks (capped at MAX_SEGMENTS) */}
              <div className="absolute inset-[10px] rounded-full">
                {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => {
                  const rotation = (360 / TOTAL_SEGMENTS) * i;
                  return (
                    <div
                      key={i}
                      className="absolute inset-0"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      <div className="absolute left-1/2 top-[3px] h-[10px] w-[1px] -translate-x-1/2 bg-white/35" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* center glow disc */}
          <div className="absolute inset-[42px] sm:inset-[46px] md:inset-[56px] rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(148,163,253,0.6),transparent_55%),radial-gradient(circle_at_70%_100%,rgba(236,72,153,0.5),transparent_55%)] opacity-80 blur-[1px]" />

          {/* center preview */}
          <SlotPreview isSpinning={isSpinning} selectedSlot={selectedSlot} />
        </div>

        {/* Spin button */}
        <button
          type="button"
          onClick={handleSpin}
          disabled={isSpinning}
          className={`rounded-full bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] px-10 py-2.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(236,72,153,0.9)] transition hover:brightness-110 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed ${
            !isSpinning ? "animate-ctaPulse" : ""
          }`}
        >
          {isSpinning ? "Spinning…" : "Spin the wheel"}
        </button>
      </div>

      {/* RESULT MODAL */}
      {selectedSlot && showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md scale-100 rounded-3xl border border-violet-400/40 bg-gradient-to-b from-violet-500/20 via-black/90 to-black/95 px-5 py-6 shadow-[0_28px_100px_rgba(0,0,0,1)] animate-modalPop">
            {/* close */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-xs text-gray-200 hover:bg-white/20"
            >
              ✕
            </button>

            {/* Slot image */}
            {selectedSlot.image && (
              <div className="mb-4 flex justify-center">
                <div className="relative h-28 w-28 rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_26px_rgba(0,0,0,0.9)]">
                  <img
                    src={selectedSlot.image}
                    alt={selectedSlot.name}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                </div>
              </div>
            )}

            {/* Title */}
            <h2 className="text-xl font-bold text-white leading-tight mb-1 text-center">
              {selectedSlot.name}
            </h2>

            {selectedSlot.provider && (
              <p className="text-xs text-gray-300 mb-3 text-center">
                {selectedSlot.provider}
              </p>
            )}

            {/* Tags */}
            {selectedSlot.tags && selectedSlot.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap justify-center gap-1.5">
                {selectedSlot.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-black/60 px-2 py-1 text-[10px] text-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  handlePlay();
                  setShowModal(false);
                }}
                className="btn-primary flex-1 justify-center text-xs md:text-sm"
              >
                Play now
              </button>
              <button
                type="button"
                onClick={() => closeModalAndMaybeSpin(true)}
                className="rounded-lg border border-white/25 px-3 py-2 text-[11px] text-gray-200 hover:bg-white/10 active:scale-95 transition"
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
