// components/BitStarzModal.js
"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bitstarz_modal_last_shown_at";
const COOLDOWN_HOURS = 24;
const BITSTARZ_URL = "https://bzstarz1.com/boe5tub8a"; // tvoj aff link
const BANNER_SRC = "/bitstarz-300x250.jpg"; // daj sliko v /public pod tem imenom

function isEligibleToShow() {
  if (typeof window === "undefined") return false;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;

    const last = Number(raw);
    if (!last) return true;

    const now = Date.now();
    const diffHours = (now - last) / (1000 * 60 * 60);

    return diffHours >= COOLDOWN_HOURS;
  } catch {
    // če localStorage ne dela, raje ne kažemo
    return false;
  }
}

function markShown() {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // ignore
  }
}

export default function BitStarzModal() {
  const [open, setOpen] = useState(false);

  // odločimo se, če ga bomo pokazali
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isEligibleToShow()) {
      // malo zamaknemo, da ne skoči takoj
      const t = setTimeout(() => {
        setOpen(true);
        markShown();

        if (window.gtag) {
          window.gtag("event", "bitstarz_modal_view", {
            event_category: "affiliate",
            event_label: "BitStarz modal shown",
          });
        }
      }, 2500);

      return () => clearTimeout(t);
    }
  }, []);

  if (!open) return null;

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "bitstarz_modal_click", {
        event_category: "affiliate",
        event_label: "BitStarz CTA clicked",
      });
    }

    window.open(BITSTARZ_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Card */}
      <div className="relative w-full max-w-sm rounded-3xl border border-purple-400/40 bg-gradient-to-b from-purple-500/20 via-black/90 to-black/95 px-5 py-6 shadow-[0_28px_100px_rgba(0,0,0,1)]">
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-xs text-gray-200 hover:bg-white/20"
        >
          ✕
        </button>

        {/* Badge */}
        <div className="mb-3 flex items-center justify-between gap-2 text-[11px]">
          <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-300 border border-white/15">
            Ad · BitStarz
          </span>
          <span className="text-[10px] text-gray-500">18+ · Terms apply</span>
        </div>

        {/* Banner image */}
        <div className="flex justify-center mb-4">
          <div className="relative w-[300px] h-[250px] max-w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_32px_rgba(0,0,0,0.9)]">
            <img
              src={BANNER_SRC}
              alt="BitStarz – 100% up to 1 BTC + 180 free spins"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <p className="text-xs text-gray-300 text-center mb-4 px-2">
          Looking for a place to play many of the slots you discover on
          WhichSlot? BitStarz is one of the casinos where these games are
          available. Please make sure online gaming is legal in your country.
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={handleClick}
          className="btn-primary w-full justify-center text-sm py-2.5"
        >
          Visit BitStarz
        </button>

        <p className="mt-2 text-[10px] text-gray-500 text-center">
          WhichSlot is not a casino and does not handle deposits or bets.
        </p>
      </div>
    </div>
  );
}
