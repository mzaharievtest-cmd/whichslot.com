export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl text-center space-y-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300 mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Can&apos;t decide what to play?
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Which slot should you play?
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            WhichSlot is a simple decision spinner for slot players. Hit spin
            and we&apos;ll pick a random slot for you – then jump straight to a
            casino where you can play it.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/wheel"
            className="inline-flex items-center justify-center rounded-xl bg-neonPurple px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_0_30px_rgba(162,89,255,0.85)] hover:brightness-110 active:scale-95 transition"
          >
            Start spinning
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 text-left text-xs sm:text-sm text-gray-300 max-w-3xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="font-semibold mb-1">1. Spin</p>
            <p>Hit the button and we pick a random slot for you.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="font-semibold mb-1">2. Decide</p>
            <p>See the slot name, provider and quick tags.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="font-semibold mb-1">3. Play</p>
            <p>Click &quot;Play now&quot; and continue at the casino site.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
