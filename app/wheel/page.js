// app/wheel/page.js
import Wheel from "@/components/Wheel";

export default function WheelPage() {
  return (
    <main className="min-h-[calc(100vh-56px)] flex flex-col items-center px-4 pt-10 md:pt-16 pb-10">
      <div className="w-full max-w-5xl grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        {/* Left – copy */}
        <section className="text-left md:text-left">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-300 mb-4">
            New · Slot wheel
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Don&apos;t know which slot to play?
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-md">
            Spin the WhichSlot wheel and let it pick a random slot from our
            curated list. Check the result, then hit <span className="font-semibold">Play now</span> or{" "}
            <span className="font-semibold">Spin again</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-gray-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              200+ popular slots
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              No sign-up on WhichSlot
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Simple, unbiased picker
            </span>
          </div>
        </section>

        {/* Right – wheel */}
        <section className="flex justify-center">
          <Wheel />
        </section>
      </div>

      {/* Small helper text instead of ugly card */}
      <p className="mt-8 text-[11px] text-gray-500 text-center max-w-md">
        Tip: tap the wheel or press{" "}
        <span className="font-semibold text-gray-300">Spin the wheel</span> to get a suggestion.  
        Use <span className="font-semibold text-gray-300">Play now</span> to open the slot in a new tab.
      </p>
    </main>
  );
}
