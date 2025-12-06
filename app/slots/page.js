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
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                       shadow-[0_18px_45px_rgba(0,0,0,0.75)]
                       hover:border-neonPurple/60 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)]
                       transition h-[350px] md:h-[380px]"
          >
            {/* FULL BACKGROUND IMAGE */}
            {slot.image && (
              <Image
                src={slot.image}
                alt={slot.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                priority={slot.id <= 6}
              />
            )}

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/65 to-black/15" />

            {/* CONTENT + BACK PILL */}
            <div className="relative z-10 h-full flex items-end p-3">
              <div className="w-full rounded-2xl bg-black/65 border border-white/15 backdrop-blur-md px-3.5 py-3.5">
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gray-300/90">
                    {slot.provider}
                  </p>
                  <h2 className="text-base md:text-lg font-semibold text-white leading-snug line-clamp-2 drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">
                    {slot.name}
                  </h2>

                  {slot.tags && slot.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {slot.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/70 px-2 py-1 text-[10px] text-gray-100 border border-white/15 backdrop-blur-[2px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => handlePlay(slot)}
                    className="btn-primary w-full text-xs md:text-sm justify-center"
                  >
                    Play now
                  </button>
                </div>
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
