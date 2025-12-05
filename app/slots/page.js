"use client";

import { useMemo, useState } from "react";
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
    <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">
      {/* HEADER */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
          WhichSlot · Slots
        </p>

        <h1 className="section-title">All slots in the wheel</h1>

        <p className="text-sm md:text-base text-gray-300 max-w-2xl">
          Browse all slots that can appear in the wheel. Use search or filter by
          provider to explore the list. When you find a game you like, press{" "}
          <strong>Play now</strong> to open it at a supported site.
        </p>
      </header>

      {/* SEARCH + FILTERS */}
      <section className="space-y-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by slot or provider..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonPurple/60 backdrop-blur"
        />

        {/* Filters row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-gray-400">
            {filteredSlots.length} of {SLOTS.length} slots
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">Provider</span>

            <div className="relative inline-flex">
              <select
                value={providerFilter}
                onChange={(e) => setProviderFilter(e.target.value)}
                className="appearance-none rounded-xl border border-white/10 bg-white/5 px-3 pr-8 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neonPurple/60 backdrop-blur"
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

      {/* GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {filteredSlots.map((slot) => (
          <article
            key={slot.id}
            className="card group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] hover:border-neonPurple/60 transition"
          >
            {/* Slot info */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-gray-500 mb-1">
                #{slot.id.toString().padStart(3, "0")}
              </p>

              <h2 className="text-base md:text-lg font-semibold text-white leading-tight line-clamp-2">
                {slot.name}
              </h2>

              <p className="mt-1 text-xs text-gray-300">{slot.provider}</p>

              {/* Tags */}
              {slot.tags && slot.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {slot.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="chip text-[10px] border-white/10 bg-black/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-5 flex items-center gap-2">
              <button
                onClick={() => handlePlay(slot)}
                className="btn-primary flex-1 text-xs md:text-sm"
              >
                Play now
              </button>

              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="btn-secondary text-[11px] hidden sm:inline-flex"
              >
                Spin instead
              </button>
            </div>
          </article>
        ))}
      </section>

      <p className="text-[11px] text-gray-500">
        Make sure online gaming is legal in your country. Always play
        responsibly.
      </p>
    </div>
  );
}
