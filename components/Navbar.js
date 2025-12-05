export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl h-14 flex items-center justify-center gap-10">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="WhichSlot logo"
            className="h-10 w-auto drop-shadow-[0_0_8px_rgba(236,72,153,0.55)]"
          />
        </a>

        {/* Navigation links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="/" className="nav-link">Wheel</a>
          <a href="/slots" className="nav-link">Slots</a>
          <a href="/casinos" className="nav-link">Casinos</a>
        </div>

      </div>
    </nav>
  );
}
