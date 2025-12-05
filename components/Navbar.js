export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-center gap-12 px-4">
        {/* Logo – centriran, malo večji, z nežnim glowom */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="WhichSlot logo"
            className="h-10 w-auto drop-shadow-[0_0_8px_rgba(236,72,153,0.55)]"
          />
        </a>

        {/* Navigacija – z več razmika */}
        <div className="flex items-center gap-10 text-sm font-medium">
          <a href="/" className="nav-link">
            Wheel
          </a>
          <a href="/slots" className="nav-link">
            Slots
          </a>
          <a href="/casinos" className="nav-link">
            Casinos
          </a>
        </div>
      </div>
    </nav>
  );
}
