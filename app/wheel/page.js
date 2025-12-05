// app/wheel/page.js
import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <main className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-[#050816]">
      {/* background blobs / lights */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl animate-[spin_35s_linear_infinite]" />
      <div className="pointer-events-none absolute -bottom-40 -right-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-[spin_45s_linear_infinite]" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-amber-400/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-violet-500/18 blur-3xl" />

      <section className="relative z-10 flex flex-col items-center px-4 pt-10 md:pt-16 pb-14">
        <div className="w-full max-w-5xl">
          {/* Main card */}
          <div className="mx-auto flex flex-col items-center rounded-[32px] border border-white/10 bg-gradient-to-b from-white/8 via-black/70 to-black/90 px-5 py-6 md:px-10 md:py-10 shadow-[0_28px_90px_rgba(0,0,0,0.85)]">
            {/* Heading */}
            <div className="mb-6 text-center">
              <p className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gray-300 border border-white/10">
                New · Slot wheel
              </p>

              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                Don&apos;t know which slot to play?
              </h1>

              <p className="mt-3 text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
                Tap the wheel or press <span className="font-semibold">Spin the wheel</span> to get
                a random slot from our library. If you like the result, hit{" "}
                <span className="font-semibold">Play now</span>. If not, just{" "}
                <span className="font-semibold">Spin again</span>.
              </p>
            </div>

            {/* Chips */}
            <div className="mb-6 flex flex-wrap justify-center gap-2 text-[11px] text-gray-100">
              <span className="rounded-full bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 px-3 py-1 border border-emerald-400/30 backdrop-blur">
                200+ popular slots
              </span>
              <span className="rounded-full bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 px-3 py-1 border border-fuchsia-400/30 backdrop-blur">
                Simple, unbiased picker
              </span>
              <span className="rounded-full bg-gradient-to-r from-sky-400/20 to-indigo-400/20 px-3 py-1 border border-sky-400/30 backdrop-blur">
                No sign-up on WhichSlot
              </span>
            </div>

            {/* Wheel */}
            <Wheel />

            {/* Tiny helper text */}
            <p className="mt-4 text-[11px] text-gray-400 text-center max-w-sm">
              Tip: tap the wheel or use the button below it.{" "}
              <span className="font-semibold text-gray-200">Play now</span> opens the selected slot in
              a new tab.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
