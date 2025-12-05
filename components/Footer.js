export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
        
        <p>© 2025 WhichSlot.com — 18+ Play responsibly.</p>

        <div className="flex gap-4">
          <a
            href="/responsible-gaming"
            className="hover:text-gray-100 transition"
          >
            Responsible Gaming
          </a>
          <a
            href="/legal"
            className="hover:text-gray-100 transition"
          >
            Legal &amp; Affiliate Disclosure
          </a>
        </div>

      </div>
    </footer>
  );
}
