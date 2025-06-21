import { useNavigate } from "react-router";
import { STATION_PRICE } from "../../utils/constants";
import { formatToEGP } from "../../utils/helpers";

export default function TrainItem({ train }) {
  const navigate = useNavigate();

  function handleSelect() {
    navigate(`/trains/${train.id}`);
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white p-3 shadow-lg transition-all hover:shadow-xl sm:p-4 md:p-6">
      <div className="mb-3 flex items-center justify-between sm:mb-4">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-bold text-gray-900 sm:text-base md:text-lg">
            {train.number}
          </h3>
          <span className="mt-1 inline-block rounded-full bg-cyan-100 px-2 py-0.5 text-xs font-medium text-cyan-800">
            {train.level}
          </span>
        </div>
        <div className="ml-2 text-right">
          <p className="text-xs font-medium text-gray-600 sm:text-sm">
            Duration
          </p>
          <p className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
            {train.time.replace(":00", "")} Hours
          </p>
        </div>
      </div>

      <div className="mb-3 space-y-2 border-b border-gray-100 pb-3 sm:mb-4 sm:pb-4">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 flex-1 items-center space-x-1 sm:space-x-2">
            <span className="text-xs font-medium whitespace-nowrap text-gray-600 sm:text-sm">
              From
            </span>
            <span className="truncate text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
              {train.trainFrom}
            </span>
          </div>
          <div className="mx-1 text-xs text-gray-400 sm:mx-2 sm:text-sm">→</div>
          <div className="flex min-w-0 flex-1 items-center justify-end space-x-1 sm:space-x-2">
            <span className="text-xs font-medium whitespace-nowrap text-gray-600 sm:text-sm">
              To
            </span>
            <span className="truncate text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
              {train.trainTo}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <span className="whitespace-nowrap text-gray-600">Departure</span>
            <span className="font-medium text-gray-900">{train.go}</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <span className="whitespace-nowrap text-gray-600">Arrival</span>
            <span className="font-medium text-gray-900">{train.arrive}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-gray-600 sm:text-sm">Price from</p>
          <p className="truncate text-sm font-bold text-cyan-600 sm:text-base md:text-lg">
            {formatToEGP(
              train.stopin > 0 ? train.stopin * STATION_PRICE : STATION_PRICE,
            )}
          </p>
        </div>
        <button
          onClick={handleSelect}
          className="ml-2 flex-shrink-0 cursor-pointer rounded-lg bg-cyan-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none sm:ml-3 sm:px-4 sm:py-2 sm:text-sm md:px-4 md:py-2.5 md:text-base"
        >
          Select Train
        </button>
      </div>
    </div>
  );
}
