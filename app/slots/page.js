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
    return SLOTS.filter((slot) => {
      const matchesSearch =
        !search.trim() ||
        slot.name.toLowerCase().includes(search.toLowerCase()) ||
        slot.provider.toLowerCase().includes(search.toLowerCase());

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
          Browse all slots that can appear on the wheel. Use search or filter
          by provider, then click <span className="font-semibold">Play now</span>{" "}
          to open the slot at BitStarz.
        </p>
      </header>

      {/* Filters */}
      <section className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex-1 flex gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by slot or provider..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonPurple/60"
            />
          </div>
          <div className="hidden md:block text-xs text-gray-400">
            {filteredSlots.length} of {SLOTS.length} slots
          </div>
        </div>

        <div className="flex gap-2 md:gap-3 items-center">
          <label className="text-xs text-gray-400">Provider</label>
          <select
            value={providerFilter}
            onChange={(e) => setProviderFilter(e.target.value)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neonPurple/60"
          >
            {providers.map((p) => (
              <option key={p} value={p}>
                {p === "all" ? "All providers" : p}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Mobile count */}
      <div className="md:hidden text-xs text-gray-400">
        {filteredSlots.length} of {SLOTS.length} slots
      </div>

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredSlots.map((slot) => (
          <article
            key={slot.id}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 flex flex-col justify-between shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:border-neonPurple/60 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] transition"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-gray-500 mb-1">
                #{slot.id.toString().padStart(3, "0")}
              </p>
              <h2 className="text-base md:text-lg font-semibold text-white line-clamp-2">
                {slot.name}
              </h2>
              <p className="mt-1 text-xs text-gray-300">{slot.provider}</p>

              {slot.tags && slot.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {slot.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-dark px-2 py-1 text-[10px] text-gray-200 border border-white/10"
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
                className="flex-1 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.8)] group-hover:brightness-110 active:scale-95 transition"
              >
                Play now at BitStarz
              </button>
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="hidden sm:inline-flex items-center justify-center rounded-lg border border-white/15 px-3 py-2 text-[11px] text-gray-200 hover:bg-white/5 active:scale-95 transition"
              >
                Spin instead
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Tiny disclaimer */}
      <p className="text-[11px] text-gray-500 mt-4">
        &quot;Play now&quot; opens BitStarz in a new tab. We may earn a commission if
        you sign up or play. Please gamble responsibly.
      </p>
    </div>
  );
}
