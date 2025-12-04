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

      {/* Wheel with subtle glow behind */}
      <section className="w-full flex justify-center mb-8 md:mb-10">
        <div className="relative flex justify-center">
          {/* soft radial glow */}
          <div className="pointer-events-none absolute -top-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-purple-500/25 blur-3xl" />
          <div className="relative w-full max-w-md md:max-w-lg">
            <Wheel />
          </div>
        </div>
      </section>

      {/* How it works strip – centered and aligned with wheel */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5/40 bg-gradient-to-r from-white/8 to-white/0 backdrop-blur-xl px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center gap-3 shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
          <h2 className="text-sm md:text-base font-semibold text-white md:w-40">
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
      </section>
    </main>
  );
}
