// app/wheel/page.js
import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <main className="min-h-[calc(100vh-56px)] flex flex-col items-center px-4 pt-10 md:pt-16 pb-10">
      <section className="w-full max-w-5xl flex flex-col items-center gap-6 text-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400 mb-2">
            WhichSlot · Wheel
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Don&apos;t know which slot to play?
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
            Tap the wheel or press <span className="font-semibold">Spin the wheel</span> to get a random slot
            from our library. If you like the result, hit{" "}
            <span className="font-semibold">Play now</span>. If not, just{" "}
            <span className="font-semibold">Spin again</span>.
          </p>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-2 text-[11px] text-gray-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            200+ popular slots
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Simple, unbiased picker
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            No sign-up on WhichSlot
          </span>
        </div>

        {/* Wheel + result card */}
        <Wheel />

        {/* Tiny helper text */}
        <p className="mt-4 text-[11px] text-gray-500 max-w-sm">
          Tip: tap the wheel or use the button below it.{" "}
          <span className="font-semibold text-gray-300">Play now</span> opens the selected slot
          in a new tab.
        </p>
      </section>
    </main>
  );
}
