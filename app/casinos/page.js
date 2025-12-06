"use client";

import casinos from "../data/casinos.json";

// Refined neutral, premium product copy
const enhancedCasinos = casinos.map((casino) => {
  if (casino.name === "BitStarz") {
    return {
      ...casino,
      tagline:
        "A well-established online casino with a clean design and a wide selection of slots and table games.",
      welcomeOffer: casino.welcomeOffer || "100% up to €100 or 1 BTC + 180 Free Spins",
      highlights: [
        "Large selection of online slots and casino games.",
        "Supports a range of commonly used payment methods.",
        "Quick and simple account setup.",
        "Interface designed for smooth use on desktop and mobile."
      ],
      notes: [
        "Bonus amounts and game availability can differ depending on your location.",
        "All details should be verified on the BitStarz website before registering."
      ]
    };
  }

  if (casino.name === "BC.Game") {
    return {
      ...casino,
      tagline:
        "A modern casino platform featuring a broad game library and integrated promotional features.",
      welcomeOffer: casino.welcomeOffer || "Up to 780% welcome bonus",
      highlights: [
        "Extensive catalogue of slots and live-casino titles.",
        "Multiple payment methods depending on regional availability.",
        "Fast onboarding—new players can start exploring within minutes.",
        "Regular bonuses and platform events displayed inside the lobby."
      ],
      notes: [
        "Bonus rules and game access vary by country.",
        "Always review current information on the BC.Game website."
      ]
    };
  }

  return casino;
});

export default function CasinosPage() {
  const handlePlay = (casino) => {
    const url = casino.affiliateUrl || casino.websiteUrl;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
          WhichSlot · Casinos
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Where you can play slots
        </h1>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          A selection of online casinos where many of the slots featured on
          WhichSlot are available. Compare welcome offers, payment options and
          overall experience to find the platform that suits you best.
        </p>
      </header>

      {/* Casino list */}
      <section className="grid grid-cols-1 gap-5">
        {enhancedCasinos.map((casino) => (
          <article
            key={casino.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-5 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)] transition"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-6 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),_transparent_55%)] blur-2xl" />
            </div>

            {/* Badge */}
            <div className="relative z-10 mb-3">
              <span className="inline-flex items-center rounded-full bg-black/60 border border-emerald-400/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-sm">
                Recommended
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              {/* LEFT SECTION */}
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    {casino.name}
                  </h2>
                  {casino.tagline && (
                    <p className="text-sm text-gray-300">{casino.tagline}</p>
                  )}
                </div>

                {/* Welcome bonus */}
                {casino.welcomeOffer && (
                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/40 px-3 py-2.5 text-xs md:text-sm text-emerald-100 backdrop-blur-sm">
                    <span className="font-semibold text-emerald-300">
                      Welcome bonus:&nbsp;
                    </span>
                    {casino.welcomeOffer}
                  </div>
                )}

                {/* Details chips */}
                <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
                  {casino.rating && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 border border-white/10 backdrop-blur-sm">
                      ⭐ <strong>{casino.rating}</strong>
                      <span className="text-gray-400">/ 5</span>
                    </span>
                  )}

                  {casino.licence && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 border border-white/10 backdrop-blur-sm">
                      🛡 <strong>Licence:</strong> {casino.licence}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                {casino.highlights && casino.highlights.length > 0 && (
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-gray-200">
                      Key points about {casino.name}
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {casino.highlights.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-[3px] text-[10px] text-emerald-400">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

              {/* RIGHT SECTION */}
              <div className="flex min-w-[200px] flex-col items-center md:items-end gap-1">
                <div className="flex flex-col items-center md:items-end">
                  <button
                    onClick={() => handlePlay(casino)}
                    className="btn-primary w-full md:w-auto justify-center"
                  >
                    Play now
                  </button>

                  {/* Disclaimer (cleaned) */}
                  <p className="text-[10px] text-gray-500 mt-1 text-center md:text-right">
                    18+ · Terms apply
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Footer disclaimer */}
      <p className="text-[11px] text-gray-500 max-w-3xl">
        WhichSlot.com does not operate casinos or handle real-money gaming.
        Bonus information and game availability may differ by region and may
        change over time. Always refer to the casino’s official website for
        accurate and up-to-date details.
      </p>
    </div>
  );
}
