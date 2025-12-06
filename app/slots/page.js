"use client";

import { useMemo, useState } from "react";
import { SLOTS } from "../data/slots";

export default function SlotsPage() {
  const [search, setSearch] = useState("");

  const filteredSlots = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return SLOTS;

    return SLOTS.filter((slot) => {
      const name = slot.name?.toLowerCase() || "";
      const provider = slot.provider?.toLowerCase() || "";
      return name.includes(term) || provider.includes(term);
    });
  }, [search]);

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

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Explore every slot included in the wheel. Search instantly by name to find your favorite games.
        </p>
      </header>

      {/* Search + count row */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search by slot or provider..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:max-w-md rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neonPurple/60"
          />

          <div className="text-[11px] text-gray-400 md:text-right">
            {filteredSlots.length} of {SLOTS.length} slots
          </div>
        </div>
      </section>

      {/* Grid – 4 in a row on desktop */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {filteredSlots.map((slot) => (
          <article
            key={slot.id}
            style={
              slot.image
                ? {
                    backgroundImage: `url(${slot.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                  }
                : {}
            }
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 min-h-[300px] md:min-h-[340px] shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] transition"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/55" />

            <div className="relative z-10 h-full p-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h2 className="inline-flex max-w-[90%] items-center rounded-full bg-black/50 border border-white/25 px-4 py-1.5 text-xs md:text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
                  <span className="truncate">{slot.name}</span>
                </h2>

                {slot.tags && slot.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {slot.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/40 px-2 py-1 text-[10px] text-gray-100 border border-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4">
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
