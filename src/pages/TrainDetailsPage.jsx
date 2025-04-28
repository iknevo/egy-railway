import { Link, useParams, useSearchParams } from "react-router";
import { useStations } from "../features/stations/useStations";
import { useTrain } from "../features/trains/useTrain";
import { useTrainType } from "../features/trains/useTrainType";
import Loader from "../ui/Loader";
import { USD_EGP } from "../utils/constants";
import { formatToEGP, formatToUSD, getTimeDifference } from "../utils/helpers";

export default function TrainDetailsPage() {
  const { trainId } = useParams();
  const [searchParams] = useSearchParams();
  const fromId = +searchParams.get("fromId");
  const toId = +searchParams.get("toId");
  const { data: train, isLoading: isLoadingTrain } = useTrain(trainId);
  const { data: trainType } = useTrainType(train.typeId);
  const { data: stations, isLoading: isLoadingStatinos } = useStations();
  if (isLoadingTrain || isLoadingStatinos) return <Loader />;
  const fromStation = stations.find((st) => st.id === fromId);
  const toStation = stations.find((st) => st.id === toId);
  return (
    <div className="container mx-auto p-4">
      <Link
        to="/trains"
        className="mb-4 inline-block text-cyan-600 hover:text-cyan-800"
      >
        &larr; Back to search results
      </Link>

      <div className="mb-6 flex flex-col gap-6 rounded-lg bg-white px-6 py-12 shadow-md">
        <h1 className="mb-2 text-2xl font-bold">
          {train.name} {train.trainNumber}
        </h1>
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <p className="text-lg">
              <span className="font-bold">
                {fromStation.governorate} ({fromStation.name})
              </span>
              &rarr;{" "}
              <span className="font-bold">
                {toStation.governorate}({toStation.name})
              </span>
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <span>
                Departures at{" "}
                {
                  train.stations.find((st) => st.stationId === fromId)
                    .departureTime
                }
              </span>
              /
              <span>
                Arrives at{" "}
                {train.stations.find((st) => st.stationId === toId).arrivalTime}
              </span>
              <span>
                {getTimeDifference(
                  train.stations.find((st) => st.stationId === fromId)
                    .departureTime,
                  train.stations.find((st) => st.stationId === toId)
                    .arrivalTime,
                )}
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-xl font-bold text-cyan-600">
              {/* ${train.price.toFixed(2)}{train.to} */}
              {formatToEGP(train.basePrice * trainType.priceMultiplier)} OR{" "}
              {formatToUSD(
                (train.basePrice * trainType.priceMultiplier) / USD_EGP,
              )}
            </p>
          </div>
        </div>

        <Link
          to="/booking"
          className="block w-full rounded-md bg-cyan-600 px-4 py-2 text-center text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
        >
          Continue to Booking
        </Link>
      </div>
    </div>
  );
}
