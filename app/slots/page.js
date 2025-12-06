"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SLOTS } from "../data/slots";

export default function SlotsPage() {
  const [search, setSearch] = useState("");

  const filteredSlots = useMemo(() => {
    const term = search.trim().toLowerCase();
    return SLOTS.filter((slot) => {
      if (!term) return true;
      return (
        slot.name.toLowerCase().includes(term) ||
        slot.provider?.toLowerCase().includes(term)
      );
    });
  }, [search]);

  const handlePlay = (slot) => {
    const url = slot.affiliate?.default || "https://bzstarz1.com/boe5tub8a";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
          WhichSlot · Slots
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          All slots in the wheel
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl">
          Browse all slots that can appear in the wheel. Use search to explore
          the list.
        </p>
      </header>

      {/* Search + count row */}
      <section className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search by slot or provider..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-md rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonPurple/60"
          />

          <div className="text-[11px] text-gray-400 sm:text-right">
            {filteredSlots.length} out of {SLOTS.length} slots
          </div>
        </div>
      </section>

      {/* Grid – 2 on mobile, 4 on desktop */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filteredSlots.map((slot) => (

              <article
          key={slot.id}
          className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 flex flex-col justify-between shadow-[0_18px_45px_rgba(0,0,0,0.75)] 
                     hover:border-neonPurple/60 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] transition overflow-hidden"
        >
          {/* FULL BACKGROUND IMAGE */}
          {slot.image && (
            <Image
              src={slot.image}
              alt={slot.name}
              fill
              className="absolute inset-0 object-cover opacity-40 group-hover:opacity-55 transition duration-300"
            />
          )}
        
          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 pointer-events-none"></div>
        
          {/* CONTENT */}
          <div className="relative flex gap-3 z-10">
            {/* Thumbnail */}
            <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/60 via-pink-500/60 to-amber-400/60 flex items-center justify-center border border-white/15 shadow-xl">
              {slot.image ? (
                <Image
                  src={slot.image}
                  alt={slot.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <span className="text-[11px] font-semibold text-white">
                  {getInitials(slot.name)}
                </span>
              )}
            </div>
        
            <div className="flex-1">
              <h2 className="text-base md:text-lg font-semibold text-white line-clamp-2">
                {slot.name}
              </h2>
              <p className="mt-1 text-xs text-gray-300">{slot.provider}</p>
        
              {slot.tags && slot.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {slot.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/50 px-2 py-1 text-[10px] text-gray-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        
          {/* BUTTON */}
          <div className="relative mt-4 flex items-center gap-2 z-10">
            <button
              onClick={() => handlePlay(slot)}
              className="btn-primary w-full text-xs md:text-sm justify-center"
            >
              Play now
            </button>
          </div>
        </article>
          
        ))}
      </section>

      <p className="text-[11px] text-gray-500 mt-4">
        Make sure online gaming is legal in your country and always play
        responsibly.
      </p>
    </div>
  );
}
