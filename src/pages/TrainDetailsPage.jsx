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

  function handleClick() {
    if (isAuthenticated) {
      navigate(`/booking/${trainId}`);
    } else {
      toast.error("Please Login first to continue!");
    }
  }

  if (isLoading || isLoadingTrain) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/trains"
          className="mb-6 inline-flex items-center text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to search results
        </Link>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-cyan-500 uppercase">
                Train {train.number}
              </h1>
              <span className="rounded-full bg-cyan-100 px-3 py-1 font-medium text-cyan-800">
                {train.level}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-8 space-y-6">
              {/* Route Information */}
              <div className="rounded-lg border border-gray-100 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-gray-900">
                        {train.trainFrom}
                      </span>
                      <span className="text-sm text-gray-600">{train.go}</span>
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="h-0.5 w-full bg-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <div className="h-4 w-4 rounded-full bg-cyan-600"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-gray-900">
                        {train.trainTo}
                      </span>
                      <span className="text-sm text-gray-600">
                        {train.arrive}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {train.time.replace(":00", "")} Hours
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {formatToEGP(
                      train.stopin > 0
                        ? train.stopin * STATION_PRICE
                        : STATION_PRICE,
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-gray-100 p-4">
                  <h3 className="mb-2 text-sm font-medium text-gray-600">
                    Train Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Train Number</span>
                      <span className="font-medium text-gray-900">
                        {train.number}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Class</span>
                      <span className="font-medium text-gray-900">
                        {train.level}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stops</span>
                      <span className="font-medium text-gray-900">
                        {train.stopin > 0 ? train.stopin : 1}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-100 p-4">
                  <h3 className="mb-2 text-sm font-medium text-gray-600">
                    Schedule
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Departure</span>
                      <span className="font-medium text-gray-900">
                        {train.go}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Arrival</span>
                      <span className="font-medium text-gray-900">
                        {train.arrive}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium text-gray-900">
                        {train.time.replace(":00", "")} Hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleClick}
              className="w-full cursor-pointer rounded-lg bg-cyan-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
            >
              Continue to Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
