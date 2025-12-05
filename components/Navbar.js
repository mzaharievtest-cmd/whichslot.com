"use client";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="WhichSlot" 
            className="h-7 w-7 object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]"
          />
        </a>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-sm">
          <a href="/" className="nav-link">Wheel</a>
          <a href="/slots" className="nav-link">Slots</a>
          <a href="/casinos" className="nav-link">Casinos</a>
        </div>
      </div>
    </nav>
  );
}
