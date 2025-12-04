import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Spin the Slot Wheel
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl">
            Hit spin and we’ll pick a random slot for you from a curated pool
            of popular games. Later this wheel will be connected to real-time
            casino offers and geo-routed affiliate links.
          </p>

          <Wheel />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-sm text-gray-200 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
          <h2 className="text-base font-semibold mb-3">What&apos;s coming next</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Full slot database with RTP, volatility &amp; features.</li>
            <li>Where to play: smart casino suggestions by country.</li>
            <li>Filters for Megaways, Bonus Buy, high RTP and more.</li>
            <li>Personal stats: your spin history and favourite slots.</li>
          </ul>
          <p className="mt-4 text-xs text-gray-400">
            Right now you see an animated MVP. The architecture is already
            prepared so we can later plug in real data and affiliate tracking
            without touching the core UI.
          </p>
        </div>
      </div>
    </div>
  );
}
