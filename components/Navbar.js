"use client";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 border-b border-white/10 bg-[#020617]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">

        {/* LOGO ONLY, soft glow */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="WhichSlot logo"
            className="h-8 w-8 rounded-full shadow-[0_0_14px_rgba(168,85,247,0.45)] ring-1 ring-white/10"
          />
        </a>

        {/* NAV LINKS – Neon underline hover */}
        <div className="flex items-center gap-8 text-sm">
          <a href="/" className="nav-link">Wheel</a>
          <a href="/slots" className="nav-link">Slots</a>
          <a href="/casinos" className="nav-link">Casinos</a>
        </div>
      </div>
    </nav>
  );
}
