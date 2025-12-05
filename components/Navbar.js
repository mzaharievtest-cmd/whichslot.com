// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo z glow efektom */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex items-center justify-center rounded-full bg-black/70 p-[3px] shadow-[0_0_22px_rgba(129,140,248,0.85)]">
            <Image
              src="/logo.png"
              alt="WhichSlot"
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
          </div>
        </Link>

        {/* Navigacija desno */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="nav-link">
            Wheel
          </Link>
          <Link href="/slots" className="nav-link">
            Slots
          </Link>
          <Link href="/casinos" className="nav-link">
            Casinos
          </Link>
        </div>
      </div>
    </nav>
  );
}
