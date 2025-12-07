// app/page.js  OR  app/wheel/page.js  (whichever has the wheel hero)

import Wheel from "@/components/Wheel";

export default function WheelPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start pt-24 pb-32">
      {/* HERO */}
      <section className="text-center mb-10 px-4 max-w-3xl w-full">
        <h1 className="section-title text-4xl md:text-5xl">
          Don&apos;t know which slot to play?
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-3">
          Tap the wheel or press{" "}
          <span className="font-semibold text-white">Spin the wheel</span> to
          get a random slot from our list of popular games. Like the pick? Hit{" "}
          <span className="font-semibold text-white">Play now</span>. Want
          something else? Just{" "}
          <span className="font-semibold text-white">spin again</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <span className="chip">800+ slots added</span>
          <span className="chip">Random every time</span>
          <span className="chip">No sign-up needed</span>
        </div>
      </section>

      {/* WHEEL */}
      <Wheel />

      {/* LOWER INFO CARDS */}
      <div className="flex flex-col md:flex-row gap-4 mt-14 px-4 max-w-3xl w-full">
        <div className="card flex-1">
          <h3 className="font-semibold text-white mb-1">Fair by design</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Every spin picks a random slot — no tricks, no weighting, no boosted
            titles. Just a simple picker.
          </p>
        </div>

        <div className="card flex-1">
          <h3 className="font-semibold text-white mb-1">Play instantly</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Hit <span className="font-semibold text-white">Play now</span> to
            open the game in a new tab while WhichSlot stays open and ready for
            your next spin.
          </p>
        </div>
      </div>
    </main>
  );
}
