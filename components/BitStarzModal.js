// components/BitStarzModal.js
"use client";

import { useEffect, useState } from "react";

const AFF_URL = "https://bzstarz1.com/boe5tub8a";
const STORAGE_KEY = "bitstarz_modal_last_shown";
const COOLDOWN_HOURS = 24;

function shouldShowModal() {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;

    const last = Number(raw);
    if (!Number.isFinite(last)) return true;

    const diffMs = Date.now() - last;
    const diffHours = diffMs / (1000 * 60 * 60);
    return diffHours >= COOLDOWN_HOURS;
  } catch {
    return true;
  }
}

export default function BitStarzModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (shouldShowModal()) {
      setOpen(true);
    }
  }, []);

  const markSeen = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    markSeen();
    setOpen(false);
  };

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "bitstarz_modal_click", {
        event_category: "affiliate",
        event_label: "BitStarz modal",
      });
    }

    markSeen();
    window.open(AFF_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-3xl border border-violet-400/40 bg-gradient-to-b from-violet-500/20 via-black/90 to-black/95 px-5 py-6 shadow-[0_28px_100px_rgba(0,0,0,1)]">
        {/* Top bar: 18+ + close button */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10px] text-gray-400">18+ · Terms apply</p>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full bg-white/10 px-2 py-1 text-xs text-gray-200 hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Banner image */}
        <div className="mb-4 overflow-hidden rounded-2xl border border-white/12 bg-black/40">
          <img
            src="/300x250.jpg"
            alt="BitStarz – 100% up to 1 BTC + 180 free spins"
            className="block w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Short copy */}
        <p className="text-sm text-gray-200 text-center mb-4">
          Want a place to try many of the slots you discover on WhichSlot?
          BitStarz is one of the sites where these games are available.
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={handleClick}
          className="btn-primary w-full justify-center text-sm py-3 mb-3"
        >
          Visit BitStarz
        </button>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-500 text-center">
          WhichSlot is not a casino and does not handle deposits or bets. Make
          sure online gaming is legal in your country.
        </p>
      </div>
    </div>
  );
}
