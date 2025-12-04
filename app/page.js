// app/wheel/page.js
import Wheel from "../components/Wheel";

export default function WheelPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 md:py-16">
      <div className="flex flex-col items-center gap-10">
        {/* Hero copy */}
        <header className="w-full max-w-2xl text-center">
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

        {/* Just the wheel component, nothing else */}
        <Wheel />
      </div>
    </main>
  );
}
