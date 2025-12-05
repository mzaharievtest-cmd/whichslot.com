export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo + brand */}
        <a href="/" className="flex items-center gap-2">
          {/* krožni gradient logo-badge (lahko kasneje zamenjaš z <img src="/logo.png" />) */}
          <div className="h-8 w-8 rounded-full bg-[conic-gradient(from_220deg,#22d3ee,#6366f1,#a855f7,#ec4899,#f97316,#22c55e,#22d3ee)] shadow-[0_0_16px_rgba(168,85,247,0.8)] flex items-center justify-center">
            <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/90">
              WS
            </span>
          </div>

          <span className="text-lg font-semibold tracking-tight">
            <span className="text-white">Which</span>
            <span className="text-neonPurple">Slot</span>
          </span>
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-sm text-gray-200">
          <a
            href="/"
            className="relative hover:text-white transition"
          >
            Wheel
          </a>
          <a
            href="/slots"
            className="relative hover:text-white transition"
          >
            Slots
          </a>
          <a
            href="/casinos"
            className="relative hover:text-white transition"
          >
            Casinos
          </a>
        </div>
      </div>
    </nav>
  );
}
