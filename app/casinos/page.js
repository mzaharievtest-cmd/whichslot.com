"use client";

import casinos from "../data/casinos.json";

export default function CasinosPage() {
  const handlePlay = (casino) => {
    const url = casino.affiliateUrl || casino.websiteUrl;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
          WhichSlot · Casinos
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Where you can play slots
        </h1>

        <p className="text-sm md:text-base text-gray-300 max-w-2xl">
          These gaming sites support many of the slots featured on our wheel.
          Availability depends on your region and local regulations.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-5">
        {casinos.map((casino) => (
          <article
            key={casino.id}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:border-neonPurple/60 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] transition"
          >
            <div className="absolute -top-3 left-5 rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_18px_rgba(16,185,129,0.7)]">
              Recommended
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:justify-between">
              <div className="flex-1 space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {casino.name}
                </h2>

                {casino.tagline && (
                  <p className="text-sm text-gray-300">{casino.tagline}</p>
                )}

                {casino.welcomeOffer && (
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/40 px-3 py-2.5 text-sm text-emerald-100">
                    <span className="font-semibold text-emerald-300">
                      Welcome offer:{" "}
                    </span>
                    {casino.welcomeOffer}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
                  {casino.rating && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 border border-white/10">
                      ⭐ {casino.rating}/5
                    </span>
                  )}

                  {casino.licence && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 border border-white/10">
                      🛡 Licence: {casino.licence}
                    </span>
                  )}
                </div>

                {casino.highlights?.length > 0 && (
                  <ul className="text-xs text-gray-300 space-y-1">
                    {casino.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-emerald-300">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* BUTTON ONLY — "Visit website" removed */}
              <div className="min-w-[200px] flex flex-col gap-3">
                <button
                  onClick={() => handlePlay(casino)}
                  className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(16,185,129,0.85)] hover:brightness-110 active:scale-95 transition"
                >
                  Play now
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <p className="text-[11px] text-gray-500 max-w-3xl">
        WhichSlot.com is not a casino. Bonuses and availability change based on your region. Always play responsibly.
      </p>
    </div>
  );
}
