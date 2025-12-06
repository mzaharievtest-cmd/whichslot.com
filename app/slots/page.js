"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SLOTS } from "../data/slots";

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

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredSlots.map((slot) => (
          <article
            key={slot.id}
            className="
              relative overflow-hidden
              group rounded-2xl border border-white/10 
              bg-white/[0.04] backdrop-blur-xl 
              flex flex-col justify-between
              shadow-[0_6px_22px_rgba(0,0,0,0.45)]
              hover:shadow-[0_10px_32px_rgba(0,0,0,0.65)]
              transition
              hover:border-neonPurple/40
            "
          >
            {/* Background layer */}
            {slot.image ? (
              <>
                <Image
                  src={slot.image}
                  alt={slot.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                    object-contain
                    scale-[1.02]
                    transition-opacity duration-300
                    opacity-90 group-hover:opacity-100
                  "
                />
                {/* bolj nežen gradient - slika pride bolj ven */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60 group-hover:from-black/5 group-hover:via-black/20 group-hover:to-black/55 transition-colors duration-300" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 via-pink-500/60 to-amber-400/60 flex items-center justify-center">
                <span className="text-3xl font-bold text-white drop-shadow-lg">
                  {getInitials(slot.name)}
                </span>
              </div>
            )}

            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col justify-between p-4">
              <div className="space-y-2">
                <h2 className="text-base md:text-lg font-semibold text-white line-clamp-2">
                  <span className="inline-block max-w-full rounded-full bg-black/75 px-3 py-1 text-sm md:text-[15px] leading-snug truncate border border-white/10 shadow-sm">
                    {slot.name}
                  </span>
                </h2>

                <p className="text-xs text-gray-200/90 drop-shadow-sm">
                  {slot.provider}
                </p>

                {slot.tags && slot.tags.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {slot.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-gray-100 border border-white/15 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => handlePlay(slot)}
                  className="btn-primary w-full text-xs md:text-sm justify-center"
                >
                  Play now
                </button>
              </div>
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
