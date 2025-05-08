import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import { useUser } from "../features/Authentication/useUser";
import { useTrain } from "../features/trains/useTrain";
import Loader from "../ui/Loader";
import { STATION_PRICE } from "../utils/constants";
import { formatToEGP } from "../utils/helpers";

export default function TrainDetailsPage() {
  const navigate = useNavigate();
  const { trainId } = useParams();
  const { data: train, isLoading: isLoadingTrain } = useTrain(trainId);
  const { isAuthenticated, isLoading } = useUser();
  // `/booking/${trainId}`
  function handleClick() {
    if (isAuthenticated) {
      navigate(`/booking/${trainId}`);
    } else {
      toast.error("Please Login first to continue!");
    }
  }
  if (isLoading || isLoadingTrain) return <Loader />;
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
          {train.level} {train.number}
        </h1>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="space-y-4 font-semibold">
            <p className="text-lg">
              <span className="font-bold">{train.trainFrom}</span>
              &rarr; <span className="font-bold">{train.trainTo}</span>
            </p>
            <div className="flex flex-col text-gray-600">
              <div>
                <span>
                  Departures at {train.go} / Arrives at {train.arrive}
                </span>
              </div>
              <span>{train.time.replace(":00", "")} Hours</span>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl font-bold text-cyan-600">
              {formatToEGP(
                train.stopin > 0 ? train.stopin * STATION_PRICE : STATION_PRICE,
              )}
            </p>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="block w-full cursor-pointer rounded-md bg-cyan-600 px-4 py-2 text-center text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
        >
          Continue to Booking
        </button>
      </div>
    </div>
  );
}
