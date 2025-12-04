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
      {/* Header */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
          WhichSlot · Casinos
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Casinos where you can play the slots
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl">
          For now, WhichSlot works with{" "}
          <span className="font-semibold">BitStarz</span>, a crypto-friendly
          casino with thousands of slots. We may add more partners in the
          future. Play responsibly and always check the terms in your country.
        </p>
      </header>

      {/* Casino cards */}
      <section className="grid grid-cols-1 gap-5">
        {casinos.map((casino) => (
          <article
            key={casino.id}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:border-neonPurple/60 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] transition"
          >
            {/* Recommended badge (only one casino for now) */}
            <div className="absolute -top-3 left-5 rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_18px_rgba(16,185,129,0.7)]">
              Recommended
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
              {/* Left: main info */}
              <div className="space-y-3 md:space-y-4 flex-1">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
                    {casino.name}
                  </h2>
                  {casino.tagline && (
                    <p className="mt-1 text-sm text-gray-300">
                      {casino.tagline}
                    </p>
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

                {/* Meta info row */}
                <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
                  {casino.rating && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 border border-white/10">
                      ⭐ <span className="font-semibold">{casino.rating}</span>
                      <span className="text-gray-400">/ 5</span>
                    </span>
                  )}
                  {casino.licence && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 border border-white/10">
                      🛡 <span className="font-semibold">Licence:</span>{" "}
                      {casino.licence}
                    </span>
                  )}
                  {casino.currencies && casino.currencies.length > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 border border-white/10">
                      💱{" "}
                      <span className="font-semibold">Currencies:</span>{" "}
                      {casino.currencies.slice(0, 4).join(", ")}
                      {casino.currencies.length > 4 ? " +" : ""}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                {casino.highlights && casino.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-xs text-gray-300">
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

                {/* Notes */}
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

              {/* Right: CTA */}
              <div className="flex flex-col items-stretch md:items-end gap-3 min-w-[200px]">
                <button
                  onClick={() => handlePlay(casino)}
                  className="inline-flex items-center justify-center w-full md:w-auto rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(16,185,129,0.85)] hover:brightness-110 active:scale-95 transition"
                >
                  Play now at {casino.name}
                </button>

                {casino.websiteUrl && (
                  <a
                    href={casino.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-gray-400 hover:text-gray-200 underline-offset-2 hover:underline"
                  >
                    Visit {casino.name} website
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Disclaimer */}
      <p className="text-[11px] text-gray-500 max-w-3xl">
        WhichSlot.com is not a casino and does not handle real-money gambling.
        We may receive a commission if you sign up or play at a partner casino
        through our links. Offers and availability can change. Please make sure
        online gambling is legal in your country and always play responsibly.
      </p>
    </div>
  );
}
