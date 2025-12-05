// app/wheel/page.js

import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <main className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-[#050816]">
      {/* soft neon “lights” in the background */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-violet-500/18 blur-3xl" />

      <section className="relative z-10 flex flex-col items-center px-4 pt-10 md:pt-16 pb-14">
        <div className="w-full max-w-6xl">
          <div className="mx-auto flex flex-col items-center gap-10 rounded-[32px] border border-white/8 bg-gradient-to-b from-white/10 via-black/80 to-black/95 px-5 py-8 md:px-10 md:py-10 shadow-[0_28px_90px_rgba(0,0,0,0.9)]">
            {/* TEXT BLOCK */}
            <div className="text-center max-w-2xl">
              <p className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gray-300 border border-white/10">
                New · Slot wheel
              </p>

              <h1 className="mt-4 text-[26px] md:text-[34px] font-extrabold text-white leading-tight">
                Don&apos;t know which slot to play?
              </h1>

              <p className="mt-3 text-sm md:text-[15px] text-gray-200">
                Tap the wheel or press{" "}
                <span className="font-semibold text-white">Spin the wheel</span>{" "}
                to get a random slot from our library. If you like the result,
                hit <span className="font-semibold text-white">Play now</span>.
                If not, just <span className="font-semibold text-white">spin again</span>.
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px] text-gray-100">
                <span className="rounded-full bg-gradient-to-r from-emerald-400/25 to-cyan-400/25 px-3 py-1 border border-emerald-400/30 backdrop-blur">
                  200+ popular slots
                </span>
                <span className="rounded-full bg-gradient-to-r from-violet-400/25 to-fuchsia-400/25 px-3 py-1 border border-fuchsia-400/30 backdrop-blur">
                  Simple, unbiased picker
                </span>
                <span className="rounded-full bg-gradient-to-r from-sky-400/25 to-indigo-400/25 px-3 py-1 border border-sky-400/30 backdrop-blur">
                  No sign-up on WhichSlot
                </span>
              </div>
            </div>

            {/* WHEEL */}
            <div className="flex flex-col items-center">
              <Wheel />
              <p className="mt-3 text-[11px] text-gray-400 text-center max-w-sm">
                Tip: tap the wheel or use the button below it.{" "}
                <span className="font-semibold text-gray-200">Play now</span>{" "}
                opens the selected slot in a new tab at a partner casino.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
