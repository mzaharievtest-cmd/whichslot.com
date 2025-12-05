"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/wheel" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="WhichSlot Logo"
            width={36}
            height={36}
            className="select-none"
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm text-gray-200">
          <Link href="/wheel" className="hover:text-white transition">
            Wheel
          </Link>
          <Link href="/slots" className="hover:text-white transition">
            Slots
          </Link>
          <Link href="/casinos" className="hover:text-white transition">
            Casinos
          </Link>
        </div>
      </div>
    </nav>
  );
}
