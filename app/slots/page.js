"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SLOTS, DEFAULT_IMAGE } from "../data/slots";

export default function SlotsPage() {
  const [search, setSearch] = useState("");
  const [providerFilter, setProviderFilter] = useState("all");

  const providers = useMemo(() => {
    const set = new Set(SLOTS.map((s) => s.provider));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredSlots = useMemo(() => {
    const term = search.trim().toLowerCase();
    return SLOTS.filter((slot) => {
      const matchesSearch =
        !term ||
        slot.name.toLowerCase().includes(term) ||
        slot.provider.toLowerCase().includes(term);

      const matchesProvider =
        providerFilter === "all" || slot.provider === providerFilter;

      return matchesSearch && matchesProvider;
    });
  }, [search, providerFilter]);

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
          Browse all slots that can appear in the wheel. Use search or filter by
          provider to explore the list. When you find a game you like, press{" "}
          <span className="font-semibold">Play now</span> to open it on a
          supported site.
        </p>
      </header>

      {/* Search + info row */}
      <section className="space-y-3">
        <div>
          <input
            type="text"
            placeholder="Search by slot or provider..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonPurple/60"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-[11px] text-gray-400">
            {filteredSlots.length} of {SLOTS.length} slots
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-xs text-gray-400">Provider</span>
            <div className="relative inline-flex">
              <select
                value={providerFilter}
                onChange={(e) => setProviderFilter(e.target.value)}
                className="appearance-none rounded-xl border border-white/10 bg-white/5 px-3 pr-8 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neonPurple/60"
              >
                {providers.map((p) => (
                  <option key={p} value={p}>
                    {p === "all" ? "All providers" : p}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] text-gray-400">
                ▼
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: 2 na mobile, 4 na desktopu */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {filteredSlots.map((slot) => {
          const img = slot.image || DEFAULT_IMAGE || null;
          const hasImage = !!img;

          return (
            <article
              key={slot.id}
              className="group relative rounded-2xl border border-white/10 bg-black/70 overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.85)] hover:border-neonPurple/70 hover:shadow-[0_26px_70px_rgba(0,0,0,0.95)] transition-transform duration-200 hover:-translate-y-1"
            >
              {/* FULL background image od VRHA do DNA */}
              {hasImage && (
                <Image
                  src={img}
                  alt={slot.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              )}

              {/* Dark overlay, da text ostane čitljiv, image še vedno pride do izraza */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-black/95 group-hover:from-black/20 group-hover:via-black/60" />

              {/* Content */}
              <div className="relative flex flex-col justify-between h-full p-3 md:p-4">
                {/* TOP: ime + provider + tags */}
                <div className="space-y-2">
                  {/* Če ni slike, pokažemo initiale kot malo značko */}
                  {!hasImage && (
                    <div className="inline-flex items-center justify-center rounded-lg bg-white/10 px-2 py-1 text-[10px] font-semibold text-white mb-1">
                      {getInitials(slot.name)}
                    </div>
                  )}

                  <h2 className="text-xs sm:text-sm md:text-base font-semibold text-white line-clamp-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]">
                    {slot.name}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-gray-200/90 drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                    {slot.provider}
                  </p>

                  {slot.tags && slot.tags.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {slot.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/60 px-2 py-0.5 text-[9px] text-gray-100 border border-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* BOTTOM: button */}
                <div className="mt-3">
                  <button
                    onClick={() => handlePlay(slot)}
                    className="btn-primary w-full text-[11px] sm:text-xs md:text-sm justify-center"
                  >
                    Play now
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <p className="text-[11px] text-gray-500 mt-4">
        Make sure online gaming is legal in your country and always play
        responsibly.
      </p>
    </div>
  );
}
