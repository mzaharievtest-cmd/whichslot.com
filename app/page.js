// app/wheel/page.js
import Wheel from "../components/Wheel";

export default function WheelPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] gap-10 md:gap-14 items-center">
        {/* Left: hero text + wheel */}
        <div className="space-y-8">
          <header className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
              WhichSlot · Wheel
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Spin the slot wheel
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-xl">
              Can&apos;t decide what to play? Let WhichSlot pick something for you.
              Every spin selects a random slot from our library — simple and fun.
            </p>
          </header>

          {/* Actual wheel */}
          <Wheel />

          <p className="mt-2 text-[11px] text-gray-500">
            Press <span className="font-semibold text-gray-300">Spin the wheel</span> to get a suggestion.
          </p>
        </div>

        {/* Right: How it works card */}
        <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 space-y-4 shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
          <h2 className="text-lg font-semibold text-white">How to use WhichSlot</h2>
          <ol className="space-y-2 text-sm text-gray-300 list-decimal list-inside">
            <li>
              Press <span className="font-semibold">Spin the wheel</span>.
            </li>
            <li>Wait for the wheel to stop on a random slot.</li>
            <li>Check the quick info and see if it looks interesting.</li>
            <li>If you want another idea, just spin again.</li>
          </ol>
          <p className="pt-2 text-[11px] text-gray-500">
            Soon we&apos;ll also show where selected slots are available to play,
            adapted to your region.
          </p>
        </aside>
      </div>
    </div>
  );
}
