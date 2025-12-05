export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">

        {/* LEFT SIDE — Logo Only */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="WhichSlot logo"
            className="h-10 w-10 rounded-full shadow-[0_0_18px_rgba(168,85,247,0.75)] ring-1 ring-white/10 hover:scale-105 transition"
          />
        </a>

        {/* RIGHT SIDE — Navigation */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <a href="/" className="hover:text-white transition">Wheel</a>
          <a href="/slots" className="hover:text-white transition">Slots</a>
          <a href="/casinos" className="hover:text-white transition">Casinos</a>
        </div>

      </div>
    </nav>
  );
}
