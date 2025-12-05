// app/wheel/page.js
import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <main className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-[#020617] text-white">
      {/* Ambient lights / background */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl opacity-80" />

      <section className="relative z-10 px-4 pt-10 pb-16 md:pt-14">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          {/* LEFT – copy / value props */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-gray-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              New · Slot wheel
            </div>

            <h1 className="mt-4 text-[28px] leading-tight font-extrabold md:text-[36px]">
              Don&apos;t know which slot to play?
            </h1>

            <p className="mt-3 max-w-xl text-sm md:text-[15px] text-gray-200">
              Let <span className="font-semibold text-white">WhichSlot</span>{" "}
              decide. Spin the wheel and we&apos;ll pick a random game from our
              curated list of popular online slots. If you like the result, hit{" "}
              <span className="font-semibold text-white">Play now</span>. If
              not, just <span className="font-semibold text-white">spin again</span>.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-gray-100">
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

            <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-gray-300 md:max-w-md">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-semibold text-white">
                  Fair by design
                </p>
                <p className="mt-1 text-[11px] text-gray-300">
                  Every spin picks a random slot. No weighting, no boosting –
                  just a clean picker.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-semibold text-white">
                  Play where you want
                </p>
                <p className="mt-1 text-[11px] text-gray-300">
                  Open the game at a supported casino in a new tab and keep
                  WhichSlot ready for the next spin.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – wheel + tip */}
          <div className="flex-1 flex flex-col items-center md:items-end">
            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 via-black/80 to-black/95 px-5 py-6 md:px-8 md:py-8 shadow-[0_28px_90px_rgba(0,0,0,0.95)] w-full max-w-md">
              {/* subtle top highlight */}
              <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-b-[50%] bg-gradient-to-b from-white/20 via-white/0 to-transparent opacity-30" />

              <div className="flex flex-col items-center gap-6">
                <Wheel />

                <p className="text-[11px] text-gray-400 text-center">
                  Tip: tap the wheel or use the button below it.{" "}
                  <span className="font-semibold text-gray-200">
                    Play now
                  </span>{" "}
                  opens the selected slot in a new tab at a partner casino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
