// app/wheel/page.js
import Wheel from "../components/Wheel";

export default function WheelPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 min-h-[calc(100vh-96px)] flex items-center">
      <div className="w-full space-y-10">
        {/* Top: label + heading + copy */}
        <header className="max-w-xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
            WhichSlot · Wheel
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Spin the slot wheel
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            Can&apos;t decide what to play? Let WhichSlot pick something for you.
            Every spin selects a random slot from our library — simple and fun.
          </p>
        </header>

        {/* Middle: wheel + how-to in a responsive layout */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
          {/* Wheel block */}
          <section className="flex flex-col items-center lg:items-start gap-4">
            <div className="w-full flex justify-center">
              {/* make the wheel feel bigger on desktop */}
              <div className="w-full max-w-md md:max-w-lg">
                <Wheel />
              </div>
            </div>

            <p className="text-[11px] text-gray-500 text-center lg:text-left">
              Press{" "}
              <span className="font-semibold text-gray-300">Spin the wheel</span>{" "}
              to get a suggestion.
            </p>
          </section>

          {/* How to use card */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
            <h2 className="text-lg font-semibold text-white mb-3">
              How to use WhichSlot
            </h2>
            <ol className="space-y-2 text-sm text-gray-300 list-decimal list-inside">
              <li>
                Press <span className="font-semibold">Spin the wheel</span>.
              </li>
              <li>Wait for the wheel to stop on a random slot.</li>
              <li>Check the quick info and see if it looks interesting.</li>
              <li>If you want another idea, just spin again.</li>
            </ol>
            <p className="pt-3 text-[11px] text-gray-500">
              Soon we&apos;ll also show where selected slots are available to
              play, adapted to your region.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
