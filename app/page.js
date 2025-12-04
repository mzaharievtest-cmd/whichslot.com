export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl grid gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">
        {/* LEFT: copy + CTA */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            New • Slot discovery by spin
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            <span className="block">Spin. Discover.</span>
            <span className="block text-neonPurple">Play WhichSlot.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8">
            A clean, unbiased way to discover online slots. Spin the wheel to
            get a random game, then jump straight to a casino where you can
            play it.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="/wheel"
              className="inline-flex items-center justify-center rounded-xl bg-neonPurple px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_0_35px_rgba(162,89,255,0.9)] hover:brightness-110 active:scale-95 transition"
            >
              Spin the Slot Wheel
            </a>

            <a
              href="/slots"
              className="text-sm sm:text-base text-gray-300 hover:text-white underline-offset-4 hover:underline"
            >
              Browse all slots →
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" />
              No signup required
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neonBlue" />
              Built for affiliate optimisation
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Mobile-friendly experience
            </div>
          </div>
        </div>

        {/* RIGHT: animated preview card */}
        <div className="relative flex items-center justify-center">
          {/* glow background */}
          <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.7),_transparent_65%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.6),_transparent_65%)] opacity-80 blur-3xl animate-glow-pulse" />

          <div className="relative w-full max-w-sm rounded-3xl border border-white/12 bg-white/5 backdrop-blur-xl p-6 shadow-[0_30px_80px_rgba(0,0,0,0.75)] animate-float">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[11px] uppercase tracking-[0.25em] text-gray-300">
                Preview
              </div>
              <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            </div>

            <div className="relative flex flex-col items-center gap-4">
              <div className="relative w-56 h-56">
                {/* outer subtle spinning ring */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />

                {/* gradient ring */}
                <div className="absolute inset-3 rounded-full bg-[conic-gradient(from_160deg,_#4BB8F9,_#A259FF,_#F4C542,_#4BB8F9)] opacity-90" />

                {/* pointer */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-180">
                  <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[18px] border-l-transparent border-r-transparent border-b-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-wiggle" />
                </div>

                {/* center disk */}
                <div className="absolute inset-10 rounded-full bg-dark flex flex-col items-center justify-center border border-white/20 shadow-[0_0_25px_rgba(15,23,42,0.9)]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                    WhichSlot
                  </span>
                  <span className="mt-1 text-sm font-semibold text-white">
                    Slot Wheel
                  </span>
                </div>

                {/* orbiting dots */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <span className="absolute left-1/2 -translate-x-1/2 -top-1 h-2 w-2 rounded-full bg-neonBlue shadow-[0_0_10px_rgba(59,130,246,0.9)] animate-orbit" />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(244,197,66,0.9)] animate-orbit" />
                    <span className="absolute left-3 bottom-6 h-2 w-2 rounded-full bg-neonPurple shadow-[0_0_10px_rgba(162,89,255,0.9)] animate-orbit" />
                  </div>
                </div>
              </div>

              <p className="text-xs text-center text-gray-300">
                Spin to get a random slot from our curated list. Perfect when you
                don&apos;t know what to play next or want to discover something new.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
