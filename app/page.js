export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">Spin. Discover. Play.</h1>
      <p className="text-lg text-gray-300 max-w-xl mb-10">
        The fastest way to find your next slot. Spin the wheel or browse our library.
      </p>

      <a href="/wheel" className="px-8 py-4 bg-neonPurple rounded-xl text-lg font-semibold hover:opacity-90">
        Spin the Slot Wheel
      </a>
    </div>
  );
}
