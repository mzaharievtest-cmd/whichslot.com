"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SLOTS } from "../data/slots";

export default function SlotsPage() {
  const [search, setSearch] = useState("");
  const [providerFilter, setProviderFilter] = useState("all");

  // Providers — če providerja ni, damo "Unknown"
  const providers = useMemo(() => {
    const set = new Set(SLOTS.map((s) => s.provider || "Unknown"));
    return ["all", ...Array.from(set)];
  }, []);

  // Filter search + provider
  const filteredSlots = useMemo(() => {
    const term = search.trim().toLowerCase();
    return SLOTS.filter((slot) => {
      const name = slot.name?.toLowerCase() || "";
      const provider = slot.provider?.toLowerCase() || "";

      const matchesSearch =
        !term || name.includes(term) || provider.includes(term);

      const matchesProvider =
        providerFilter === "all" || slot.provider === providerFilter;

      return matchesSearch && matchesProvider;
    });
  }, [search, providerFilter]);

  // Open affiliate link
  const handlePlay = (slot) => {
    const url = slot.affiliate?.default || "https://bzstarz1.com/boe5tub8a";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Fallback inicialke
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
          provider to explore the list.
        </p>
      </header>

      {/* Search + info row */}
      <section className="space-y-3">
        <input
          type="text"
          placeholder="Search by slot or provider..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonPurple/60"
        />

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
        {filteredSlots.map((slot) => {
          const imgSrc = slot.image; // 🔥 tu uporabljamo tvojo pot

          return (
            <article
              key={slot.name}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 flex flex-col justify-between shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:border-neonPurple/60 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] transition"
            >
              <div className="flex gap-3">
                {/* Slot image */}
                <div className="relative h-20 w-32 rounded-xl overflow-hidden bg-black/40 border border-white/15 shadow-[0_0_18px_rgba(0,0,0,0.7)]">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={slot.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-white">
                      {getInitials(slot.name)}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h2 className="text-base md:text-lg font-semibold text-white">
                    {slot.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-300">
                    {slot.provider || "Unknown"}
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => handlePlay(slot)}
                className="btn-primary w-full mt-4 text-xs md:text-sm justify-center"
              >
                Play now
              </button>
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
