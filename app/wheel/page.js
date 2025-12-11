// app/wheel/page.js
import Wheel from "@/components/Wheel";
import BitStarzModal from "@/components/BitStarzModal";

export const metadata = {
  title: "Slot Wheel – Random Slot Picker | Spin & Discover Your Next Game",
  description:
    "Not sure which slot to play? Spin the WhichSlot wheel to get a random pick from 800+ popular online slots. Fast, simple and no sign-up required.",
  alternates: {
    canonical: "/wheel",
  },
  openGraph: {
    title: "WhichSlot – Spin the Wheel & Get a Random Slot",
    description:
      "Tap the wheel and let WhichSlot choose a game for you. Over 800 slots, fair random selection, and instant play.",
    url: "https://whichslot.com/wheel",
    siteName: "WhichSlot",
    images: [
      {
        url: "/og-wheel.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhichSlot – Random Slot Wheel",
    description:
      "Spin the wheel and instantly get a random slot chosen from 800+ popular casino games.",
    images: ["/og-wheel.png"],
  },
};

export default function WheelPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start pt-24 pb-32">
      {/* HERO */}
      <section className="text-center mb-10 px-4 max-w-3xl w-full">
        <h1 className="section-title text-4xl md:text-5xl">
          Don&apos;t know which slot to play?
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-3">
          Spin the wheel and let WhichSlot pick a game for you. Every spin is
          completely random and pulls from over{" "}
          <span className="font-semibold text-white">800+ popular slots</span>.
          Like the game you got? Just hit{" "}
          <span className="font-semibold text-white">Play now</span>. Want
          another? Simply{" "}
          <span className="font-semibold text-white">spin again</span>.
        </p>

        {/* CHIPS */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <span className="chip">800+ slots added</span>
          <span className="chip">Truly random results</span>
          <span className="chip">No sign-up required</span>
        </div>
      </section>

      {/* WHEEL */}
      <Wheel />

      {/* LOWER INFO CARDS */}
      <div className="flex flex-col md:flex-row gap-4 mt-14 px-4 max-w-3xl w-full">
        <div className="card flex-1 min-h-[140px]">
          <h3 className="font-semibold text-white mb-1">Fair by design</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Each spin pulls from the same full library — no boosted games, no
            weighting, no hidden rules. Just a clean and simple random picker.
          </p>
        </div>

        <div className="card flex-1 min-h-[140px]">
          <h3 className="font-semibold text-white mb-1">Instant play</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            When you like the result, click{" "}
            <span className="font-semibold text-white">Play now</span> to open
            the game in a new tab. WhichSlot stays open and ready for your next
            spin.
          </p>
        </div>
      </div>

      {/* INTERNAL SEO LINKS */}
      <div className="mt-12 text-center space-y-2 text-sm text-gray-400 px-4">
        <p>
          Want to see all games included in the wheel?{" "}
          <a
            href="/slots"
            className="text-purple-300 hover:text-purple-200 underline"
          >
            Browse all slots
          </a>
        </p>

        <p>
          Want to know where you can play these games?{" "}
          <a
            href="/casinos"
            className="text-purple-300 hover:text-purple-200 underline"
          >
            View casinos
          </a>
        </p>
      </div>

      {/* BitStarz promo modal – shows at most 1× per 24h per browser */}
      <BitStarzModal />
    </main>
  );
}
