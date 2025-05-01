import { useNavigate, useSearchParams } from "react-router";
import Loader from "../../ui/Loader";
import { USD_EGP } from "../../utils/constants";
import {
  formatToEGP,
  formatToUSD,
  getTimeDifference,
} from "../../utils/helpers";
import { useStation } from "../stations/useStation";
import { useTrainType } from "./useTrainType";

export default function TrainItem({ train }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromId = +searchParams.get("fromId");
  const toId = +searchParams.get("toId");
  const { data: fromStation, isLoading: isLoading1 } = useStation(fromId);
  const { data: toStation, isLoading: isLoading2 } = useStation(toId);
  const { data: trainType, isLoading: isLoadingType } = useTrainType(
    train.typeId,
  );
  const time1 = train.stations.find(
    (st) => st.stationId === fromId,
  ).departureTime;

  const time2 = train.stations.find((st) => st.stationId === toId).arrivalTime;

  function handleSelect() {
    // searchParams.set("from", fromId);
    // searchParams.set("to", toId);
    // setSearchParams(searchParams);
    // navigate(`/trains/${train.id}?${searchParams}`);
    navigate(`/booking/${train.id}`);
  }

  if (isLoading1 || isLoading2 || isLoadingType) return <Loader />;
  return (
    <div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">
            {train.name} {train.trainNumber} ( {trainType.name} )
          </p>
          <p className="text-sm text-gray-600">
            {fromStation.governorate} → {toStation.governorate}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold">
            {time1} - {time2}
          </p>
          <p className="text-sm text-gray-600">
            {getTimeDifference(time1, time2)}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold text-cyan-600">
          {formatToEGP(train.basePrice * trainType.priceMultiplier)} OR{" "}
          {formatToUSD((train.basePrice * trainType.priceMultiplier) / USD_EGP)}
        </p>
        <button
          onClick={handleSelect}
          className="rounded bg-cyan-600 px-4 py-1 text-white hover:bg-cyan-700"
        >
          Select
        </button>
      </div>
    </div>
  );
}
