import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Slot Wheel
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl">
            Hit spin and we’ll pick a random slot for you from a curated pool.
            Later we’ll attach smart affiliate links and geo-based casino
            suggestions.
          </p>
          <Wheel />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-sm text-gray-200">
          <h2 className="text-base font-semibold mb-3">How it works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Click <strong>Spin</strong> to start the wheel animation.</li>
            <li>We pick a random slot from a predefined list.</li>
            <li>
              The result card shows the slot name, provider, and some quick tags.
            </li>
            <li>
              Later this panel will also show <strong>Play now</strong> buttons
              with affiliate links, RTP, volatility, and recommended casinos.
            </li>
          </ol>
          <p className="mt-4 text-xs text-gray-400">
            This is the MVP behaviour. We can easily plug in a real slot
            database and geo-routed casino offers once the core UI is locked.
          </p>
        </div>
      </div>
    </div>
  );
}
