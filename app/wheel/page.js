import Wheel from "@/components/Wheel";

export default function WheelPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start pt-24 pb-32">
      {/* HERO */}
      <section className="text-center mb-10 px-4 max-w-3xl w-full">
        <div className="mx-auto mb-4 inline-block rounded-full bg-white/5 px-4 py-1 text-[11px] tracking-[0.2em] text-purple-300 border border-white/10">
          ● NEW · SLOT WHEEL
        </div>

        <h1 className="section-title text-4xl md:text-5xl">
          Don&apos;t know which slot to play?
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Tap the wheel or press{" "}
          <span className="font-semibold text-white">Spin the wheel</span> and
          we&apos;ll pick a random game from our curated list of popular online
          slots. If you like the result, press{" "}
          <span className="font-semibold text-white">Play now</span>. If not,
          just <span className="font-semibold text-white">spin again</span>.
        </p>

        {/* CHIPS */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <span className="chip">200+ trending slots</span>
          <span className="chip">Truly random suggestions</span>
          <span className="chip">No account needed</span>
        </div>
      </section>

      {/* WHEEL */}
      <Wheel />

      {/* LOWER INFO CARDS */}
      <div className="flex flex-col md:flex-row gap-4 mt-14 px-4 max-w-3xl w-full">
        <div className="card flex-1">
          <h3 className="font-semibold text-white mb-1">Fair by design</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Every spin pulls a truly random slot. No weighting, no boosting — 
            just a clean picker.
          </p>
        </div>

        <div className="card flex-1">
          <h3 className="font-semibold text-white mb-1">Play instantly</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Click <span className="font-semibold text-white">Play now</span> to 
            open the selected game in a new tab, while WhichSlot stays open and 
            ready for your next spin.
          </p>
        </div>
      </div>
    </main>
  );
}
