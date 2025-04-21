import { useStation } from "../stations/useStation";

export default function TrainItem({ train, fromId, toId }) {
  const { data: fromStation, isLoading: isLoading1 } = useStation(fromId);
  const { data: toStation, isLoading: isLoading2 } = useStation(toId);
  if (isLoading1 || isLoading2) return;
  console.log(fromId, toId);
  console.log(fromStation);
  console.log(toStation);
  // console.log(train, fromId, toId);
  return (
    <div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">{train.name}</p>
          <p className="text-sm text-gray-600">
            {fromStation.governorate} → {toStation.governorate}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold">09:00 - 11:30</p>
          <p className="text-sm text-gray-600">2h 30m</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold text-cyan-600">$45.00</p>
        <button className="rounded bg-cyan-600 px-4 py-1 text-white hover:bg-cyan-700">
          Select
        </button>
      </div>
    </div>
  );
}
