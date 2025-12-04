import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-start">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center lg:text-left w-full">
            Spin the slot wheel
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl text-center lg:text-left">
            Can&apos;t pick a game? Let WhichSlot decide. Every spin selects one
            random slot from our list. When you&apos;re happy with the result,
            hit <strong>Play now</strong> and continue at the casino.
          </p>

          <Wheel />
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-sm text-gray-200">
          <h2 className="text-base font-semibold mb-3">How to use WhichSlot</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Press <strong>Spin the wheel</strong>.</li>
            <li>Wait for the wheel to stop on a random slot.</li>
            <li>
              Read the quick info and, if you like it, click{" "}
              <strong>Play now</strong>.
            </li>
            <li>
              If you&apos;re not convinced, just press{" "}
              <strong>Spin again</strong>.
            </li>
          </ol>
          <p className="mt-4 text-xs text-gray-400">
            Later we&apos;ll connect each slot to one or more casinos (via
            affiliate links) and adapt &quot;Play now&quot; to your country.
          </p>
        </aside>
      </div>
    </div>
  );
}
