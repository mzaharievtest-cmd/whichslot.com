// app/wheel/page.js
import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <main className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-[#020617] text-white">
      {/* Ambient background lights */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -bottom-56 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-400/25 blur-3xl opacity-80" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-violet-500/18 blur-3xl opacity-90" />

      <section className="relative z-10 px-4 pt-10 pb-20 md:pt-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
          {/* label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-gray-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            New · Slot wheel
          </div>

          {/* title + subtitle */}
          <div>
            <h1 className="text-[26px] leading-tight font-extrabold md:text-[32px]">
              Don&apos;t know which slot to play?
            </h1>
            <p className="mt-3 max-w-xl text-sm md:text-[15px] text-gray-200 mx-auto">
              Tap the wheel or press{" "}
              <span className="font-semibold text-white">Spin the wheel</span>{" "}
              and we&apos;ll pick a random game from our curated list. If you
              like the result, hit <span className="font-semibold text-white">Play now</span>. If not, just{" "}
              <span className="font-semibold text-white">spin again</span>.
            </p>
          </div>

          {/* chips */}
          <div className="mt-1 flex flex-wrap justify-center gap-2 text-[11px] text-gray-100">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1 backdrop-blur">
              200+ popular slots
            </span>
            <span className="rounded-full border border-sky-400/30 bg-sky-400/15 px-3 py-1 backdrop-blur">
              Simple, unbiased suggestion
            </span>
            <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/15 px-3 py-1 backdrop-blur">
              No sign-up on WhichSlot
            </span>
          </div>

          {/* BIG WHEEL – main focus */}
          <div className="mt-4 w-full flex justify-center">
            <div className="relative w-full max-w-[440px]">
              <Wheel />
            </div>
          </div>

          {/* tip text */}
          <p className="mt-2 text-[11px] text-gray-400 max-w-md">
            Tip: tap the wheel or use the button below it.{" "}
            <span className="font-semibold text-gray-200">Play now</span> opens
            the selected slot in a new tab at a partner casino.
          </p>

          {/* small feature cards, but secondary */}
          <div className="mt-6 grid w-full max-w-3xl grid-cols-1 gap-4 text-left text-xs text-gray-300 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <p className="text-[11px] font-semibold text-white">
                Fair by design
              </p>
              <p className="mt-1 text-[11px] text-gray-300">
                Each spin picks a random slot from the list. No weighting, no
                boosting – just a clean suggestion tool.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <p className="text-[11px] font-semibold text-white">
                Play where you want
              </p>
              <p className="mt-1 text-[11px] text-gray-300">
                We send you straight to a casino where the slot is available,
                while WhichSlot stays open for your next spin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
