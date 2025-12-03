export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-lg">
      <a href="/" className="text-xl font-bold">WhichSlot</a>

      <div className="flex gap-6">
        <a href="/wheel">Wheel</a>
        <a href="/slots">Slots</a>
        <a href="/casinos">Casinos</a>
      </div>
    </nav>
  );
}
