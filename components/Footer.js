export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-400">
        <span>
          © {new Date().getFullYear()} WhichSlot.com — 18+ Play responsibly.
        </span>
        <span className="flex gap-4">
          <a href="/responsible-gaming" className="hover:text-white">
            Responsible Gaming
          </a>
          <a href="/legal" className="hover:text-white">
            Legal &amp; Affiliate Disclosure
          </a>
        </span>
      </div>
    </footer>
  );
}
