import { useNavigate } from "react-router";
import { STATION_PRICE } from "../../utils/constants";
import { formatToEGP } from "../../utils/helpers";

export default function TrainItem({ train }) {
  const navigate = useNavigate();

  function handleSelect() {
    navigate(`/trains/${train.id}`);
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{train.number}</h3>
          <span className="inline-block rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800">
            {train.level}
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-600">Duration</p>
          <p className="font-semibold text-gray-900">
            {train.time.replace(":00", "")} Hours
          </p>
        </div>
      </div>

      <div className="mb-4 space-y-2 border-b border-gray-100 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">From</span>
            <span className="font-semibold text-gray-900">
              {train.trainFrom}
            </span>
          </div>
          <div className="text-sm text-gray-400">→</div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">To</span>
            <span className="font-semibold text-gray-900">{train.trainTo}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Departure</span>
            <span className="font-medium text-gray-900">{train.go}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Arrival</span>
            <span className="font-medium text-gray-900">{train.arrive}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Price from</p>
          <p className="text-lg font-bold text-cyan-600">
            {formatToEGP(
              train.stopin > 0 ? train.stopin * STATION_PRICE : STATION_PRICE,
            )}
          </p>
        </div>
        <button
          onClick={handleSelect}
          className="cursor-pointer rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
        >
          Select Train
        </button>
      </div>
    </div>
  );
}
