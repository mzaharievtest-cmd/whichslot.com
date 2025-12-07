"use client";

import casinos from "../data/casinos.json";

// Helper: remove anything in parentheses from welcome offers
const cleanOffer = (offer) =>
  offer ? offer.replace(/\s*\(.*?\)\s*/g, "").trim() : "";

// PRESET AFFILIATE LINKS
const AFF_BitStarz = "https://bzstarz1.com/boe5tub8a";
const AFF_BCGame = "https://bc.game/i-34qxctc8x-n/";

// Enrich casino data
const enhancedCasinos = casinos.map((casino) => {
  // BITSTARZ → override tagline + cleaned offer
  if (casino.name === "BitStarz") {
    return {
      ...casino,
      affiliateUrl: AFF_BitStarz,
      tagline:
        "An established online casino with a clean layout and a broad range of real-money slots and table games.",
      welcomeOffer: cleanOffer(
        casino.welcomeOffer || "100% up to €100 or 1 BTC + 180 Free Spins"
      ),
      highlights: [
        "Large selection of online slots and casino games.",
        "Supports a range of commonly used payment methods.",
        "Quick and straightforward account setup.",
        "Interface designed for smooth use on desktop and mobile.",
      ],
      notes: [
        "Bonus amounts and game availability can differ depending on your location.",
        "All details should be checked on the official BitStarz website before registering.",
      ],
    };
  }

  // BC.GAME → override tagline + affiliate + offer cleaning
  if (casino.name === "BC.Game") {
    return {
      ...casino,
      affiliateUrl: AFF_BCGame,
      tagline:
        "A modern online casino platform with thousands of slots, live games and built-in promotional features.",
      welcomeOffer: cleanOffer(
        casino.welcomeOffer || "Up to 780% welcome bonus"
      ),
      highlights: [
        "Extensive catalogue of slots and live-casino titles.",
        "Multiple payment methods depending on regional availability.",
        "Fast onboarding — players can get started within minutes.",
        "Frequent bonuses and platform events accessible inside the lobby.",
      ],
      notes: [
        "Bonus rules and game access vary by country.",
        "Always review current information on the BC.Game website.",
      ],
    };
  }

  // DEFAULT — clean the offer
  return {
    ...casino,
    welcomeOffer: cleanOffer(casino.welcomeOffer || ""),
  };
});

export default function CasinosPage() {
  const handlePlay = (casino) => {
    // ORDER OF PRIORITY:
    // 1) casino.affiliateUrl (like BC.Game, BitStarz)
    // 2) fallback affiliate (BitStarz)
    const url = casino.affiliateUrl || AFF_BitStarz;

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
          Online casinos where you can play slots
        </h1>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Browse a small selection of online casinos where many of the slots
          featured on WhichSlot can be played for real money. Compare welcome
          bonuses, payment options and overall experience, then choose the
          casino that fits how you like to play slots online.
        </p>

        {/* 🔗 INTERNAL SEO LINKS */}
        <div className="mt-3 space-y-1 text-sm text-gray-400">
          <p>
            Want to try a random game first?{" "}
            <a
              href="/wheel"
              className="text-purple-300 hover:text-purple-200 underline"
            >
              Spin the slot wheel
            </a>
          </p>

          <p>
            Prefer browsing manually?{" "}
            <a
              href="/slots"
              className="text-purple-300 hover:text-purple-200 underline"
            >
              View all slots in the wheel
            </a>
          </p>
        </div>
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
              {/* LEFT: info */}
              <div className="flex-1 space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {casino.name}
                </h2>

                {casino.tagline && (
                  <p className="text-sm text-gray-300">{casino.tagline}</p>
                )}

                {casino.welcomeOffer && (
                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/40 px-3 py-2.5 text-xs md:text-sm text-emerald-100 backdrop-blur-sm">
                    <span className="font-semibold text-emerald-300">
                      Welcome bonus:&nbsp;
                    </span>
                    {casino.welcomeOffer}
                  </div>
                )}

                {casino.highlights && casino.highlights.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {casino.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[3px] text-[10px] text-emerald-400">
                          •
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {casino.notes && casino.notes.length > 0 && (
                  <div className="mt-3 text-[11px] text-gray-500 space-y-1">
                    {casino.notes.map((n, i) => (
                      <p key={i}>{n}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT: CTA */}
              <div className="flex min-w-[200px] flex-col items-center">
                <button
                  onClick={() => handlePlay(casino)}
                  className="btn-primary w-full md:w-auto justify-center"
                >
                  Play now
                </button>

                <p className="text-[10px] text-gray-500 mt-1 text-center">
                  18+ · Terms apply
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Footer disclaimer */}
      <p className="text-[11px] text-gray-500 max-w-3xl">
        WhichSlot.com is not an online casino and does not handle deposits,
        withdrawals or real-money bets. Bonus information and slot
        availability may differ by region and can change over time. Always
        check the casino’s own website for the latest details before you play
        slots online.
      </p>
    </div>
  );
}
