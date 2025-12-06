"use client";

import casinos from "../data/casinos.json";

export default function CasinosPage() {
  const handlePlay = (casino) => {
    const url = casino.affiliateUrl || casino.websiteUrl;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Header – same vibe as /slots */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
          WhichSlot · Casinos
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Where you can play slots
        </h1>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Here you&apos;ll find gaming sites where selected slots from our list
          are available. Availability and offers may vary depending on your
          country and local regulations.
        </p>
      </header>

      {/* Casino list – styled like big glass tiles */}
      <section className="grid grid-cols-1 gap-5">
        {casinos.map((casino) => (
          <article
            key={casino.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-5 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] transition"
          >
            {/* subtle neon glow on hover, matching /slots energy */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-6 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),_transparent_55%)] blur-2xl" />
            </div>

            {/* recommended pill */}
            <div className="relative z-10 mb-3">
              <span className="inline-flex items-center rounded-full bg-black/60 border border-emerald-400/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-sm">
                Recommended
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              {/* LEFT – main info */}
              <div className="flex-1 space-y-4">
                {/* Name + tagline */}
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    {casino.name}
                  </h2>
                  {casino.tagline && (
                    <p className="text-sm text-gray-300">{casino.tagline}</p>
                  )}
                </div>

                {/* Welcome offer highlight */}
                {casino.welcomeOffer && (
                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/40 px-3 py-2.5 text-xs md:text-sm text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.4)] backdrop-blur-sm">
                    <span className="font-semibold text-emerald-300">
                      Welcome offer:&nbsp;
                    </span>
                    {casino.welcomeOffer}
                  </div>
                )}

                {/* meta pills (rating, licence, currencies) */}
                <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
                  {casino.rating && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 border border-white/10 backdrop-blur-sm">
                      ⭐ <span className="font-semibold">{casino.rating}</span>
                      <span className="text-gray-400">/ 5</span>
                    </span>
                  )}

                  {casino.licence && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 border border-white/10 backdrop-blur-sm">
                      🛡 <span className="font-semibold">Licence:</span>{" "}
                      {casino.licence}
                    </span>
                  )}

                  {casino.currencies && casino.currencies.length > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 border border-white/10 backdrop-blur-sm">
                      💱{" "}
                      <span className="font-semibold">Currencies:</span>{" "}
                      {casino.currencies.slice(0, 4).join(", ")}
                      {casino.currencies.length > 4 ? " +" : ""}
                    </span>
                  )}
                </div>

                {/* bullet highlights */}
                {casino.highlights && casino.highlights.length > 0 && (
                  <ul className="mt-2 space-y-1.5 text-xs text-gray-300">
                    {casino.highlights.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-[3px] text-[10px] text-emerald-400">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* notes */}
                {casino.notes && casino.notes.length > 0 && (
                  <div className="mt-3 text-[11px] text-gray-500">
                    {casino.notes.map((note, idx) => (
                      <p key={idx} className={idx > 0 ? "mt-1" : ""}>
                        {note}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT – CTA */}
              <div className="flex min-w-[200px] flex-col items-stretch md:items-end gap-3">
                <button
                  onClick={() => handlePlay(casino)}
                  className="btn-primary w-full md:w-auto justify-center"
                >
                  Play now
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <p className="text-[11px] text-gray-500 max-w-3xl">
        WhichSlot.com is not a casino and does not handle real-money gaming.
        Site availability, bonuses and offers can change at any time and may
        differ by country. Always make sure online gaming is legal in your
        jurisdiction and play responsibly.
      </p>
    </div>
  );
}
