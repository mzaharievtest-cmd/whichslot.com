export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="/" className="text-lg font-semibold tracking-tight">
          <span className="text-white">Which</span>
          <span className="text-neonPurple">Slot</span>
        </a>

        <div className="flex items-center gap-6 text-sm text-gray-200">
          <a href="/" className="hover:text-white transition">
            Wheel
          </a>
          <a href="/slots" className="hover:text-white transition">
            Slots
          </a>
          <a href="/casinos" className="hover:text-white transition">
            Casinos
          </a>
        </div>
      </div>
    </nav>
  );
}
