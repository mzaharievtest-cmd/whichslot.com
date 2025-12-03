import Wheel from "../../components/Wheel";

export default function WheelPage() {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Slot Wheel</h1>
      <Wheel />
    </div>
  );
}
