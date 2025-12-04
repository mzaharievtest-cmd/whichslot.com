// app/wheel/page.js
import Wheel from "../components/Wheel";

export default function WheelPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 min-h-[calc(100vh-96px)] flex flex-col items-center">
      {/* Hero copy */}
      <header className="w-full max-w-2xl text-center mb-10 md:mb-12">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400 mb-2">
          WhichSlot · Wheel
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Spin the slot wheel
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          Can&apos;t decide what to play? Let WhichSlot pick something for you.
          Every spin selects a random slot from our library — simple and fun.
        </p>
      </header>

      {/* Wheel in the center */}
      <section className="w-full flex justify-center mb-8 md:mb-10">
        <div className="w-full max-w-md md:max-w-lg">
          <Wheel />
        </div>
      </section>

      {/* How it works strip */}
      <section className="w-full max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-white/5/40 bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-xl px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-sm font-semibold text-white md:text-base">
            How to use WhichSlot
          </h2>
          <ol className="flex-1 grid gap-2 text-[11px] md:text-xs text-gray-300 md:grid-cols-4">
            <li>
              <span className="font-semibold text-gray-100">1.</span> Press{" "}
              <span className="font-semibold">Spin the wheel</span>.
            </li>
            <li>
              <span className="font-semibold text-gray-100">2.</span> Wait for
              the wheel to stop on a random slot.
            </li>
            <li>
              <span className="font-semibold text-gray-100">3.</span> Check the
              info and see if it looks interesting.
            </li>
            <li>
              <span className="font-semibold text-gray-100">4.</span> Not sure?
              Just spin again.
            </li>
          </ol>
        </div>
        <p className="mt-3 text-[11px] text-gray-500 text-center">
          Soon we&apos;ll also show where selected slots are available to play,
          adapted to your region.
        </p>
      </section>
    </main>
  );
}
