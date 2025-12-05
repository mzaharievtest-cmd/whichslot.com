"use client";

import casinos from "../data/casinos.json";

export default function CasinosPage() {
  const handlePlay = (casino) => {
    const url = casino.affiliateUrl || casino.websiteUrl;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* HEADER */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
          WhichSlot · Casinos
        </p>

        <h1 className="section-title">Where you can play slots</h1>

        <p className="text-sm md:text-base text-gray-300 max-w-2xl">
          Below is a curated list of gaming platforms where slots featured on WhichSlot 
          can be played. Availability may differ depending on your location and applicable regulations.
        </p>
      </header>

      {/* CASINOS LIST */}
      <section className="grid grid-cols-1 gap-6">
        {casinos.map((casino) => (
          <article
            key={casino.id}
            className="card group relative transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)]"
          >
            {/* Recommended badge */}
            <div className="absolute -top-3 left-5 chip bg-emerald-600/90 border-emerald-400/50 text-white shadow-[0_0_16px_rgba(16,185,129,0.8)] px-3 py-1 text-[10px] tracking-[0.18em] uppercase">
              Recommended
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* LEFT CONTENT */}
              <div className="flex-1 space-y-4">
                {/* Name + tagline */}
                <div>
                  <h2 className="card-title">{casino.name}</h2>

                  {casino.tagline && (
                    <p className="text-sm text-gray-300 mt-1">{casino.tagline}</p>
                  )}
                </div>

                {/* Welcome offer */}
                {casino.welcomeOffer && (
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/40 px-3 py-2.5 text-xs md:text-sm text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.4)]">
                    <span className="font-semibold text-emerald-300">
                      Welcome offer:&nbsp;
                    </span>
                    {casino.welcomeOffer}
                  </div>
                )}

                {/* Chips row */}
                <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
                  {casino.rating && (
                    <span className="chip inline-flex items-center gap-1">
                      ⭐ <span className="font-semibold">{casino.rating}</span>
                      <span className="text-gray-400">/ 5</span>
                    </span>
                  )}

                  {casino.licence && (
                    <span className="chip inline-flex items-center gap-1">
                      🛡 <span className="font-semibold">Licence:</span>{" "}
                      {casino.licence}
                    </span>
                  )}

                  {casino.currencies?.length > 0 && (
                    <span className="chip inline-flex items-center gap-1">
                      💱 <span className="font-semibold">Currencies:</span>{" "}
                      {casino.currencies.slice(0, 4).join(", ")}
                      {casino.currencies.length > 4 ? " +" : ""}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                {casino.highlights?.length > 0 && (
                  <ul className="mt-2.5 space-y-1.5 text-xs text-gray-300">
                    {casino.highlights.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-[3px] text-[10px] text-emerald-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Notes */}
                {casino.notes?.length > 0 && (
                  <div className="mt-3 space-y-1 text-[11px] text-gray-500">
                    {casino.notes.map((note, idx) => (
                      <p key={idx}>{note}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT — ACTIONS */}
              <div className="flex flex-col gap-3 min-w-[200px] md:items-end">
                {/* Play now button */}
                <button
                  onClick={() => handlePlay(casino)}
                  className="btn-primary w-full md:w-auto"
                >
                  Play now
                </button>

                {/* Visit website */}
                {casino.websiteUrl && (
                  <a
                    href={casino.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-clean text-[11px] underline-offset-2 hover:underline"
                  >
                    Visit website
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* DISCLAIMER */}
      <p className="text-[11px] text-gray-500 max-w-3xl leading-relaxed">
        WhichSlot.com is not a casino and does not handle real-money gaming.
        Availability, bonuses and offers may change at any time depending on your location.
        Always ensure that online gaming is legal in your jurisdiction and play responsibly.
      </p>
    </div>
  );
}
