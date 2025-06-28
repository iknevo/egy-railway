import Filter from "../../ui/Filter";
import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import TrainItem from "./TrainItem";
import { useTrains } from "./useTrains";

export default function TrainsList({ fromStation, toStation, search }) {
  const {
    data: trains = [],
    count,
    isLoading: isLoadingTrains,
  } = useTrains({
    trainFrom: fromStation,
    trainTo: toStation,
    search,
  });

  if (isLoadingTrains) return <Loader />;

  if (!trains?.length && fromStation && toStation && search)
    return (
      <>
        <div className="mt-6 flex flex-col gap-3 sm:gap-4 md:mt-8 md:flex-row md:items-center md:justify-between">
          <h2 className="text-center text-lg font-semibold text-gray-900 sm:text-xl md:text-left md:text-2xl">
            Available Trains <span className="text-cyan-600">(0)</span>
          </h2>
          <div className="flex justify-center md:justify-end">
            <Filter
              options={[
                { value: "all", label: "All" },
                { value: "VIP", label: "VIP" },
                { value: "Express", label: "EXPRESS" },
                { value: "Sleeper", label: "SLEEPER" },
              ]}
            />
          </div>
        </div>
        <div className="mt-2 overflow-hidden rounded-xl bg-white p-4 text-center shadow-lg sm:mt-6 sm:p-3 md:mt-4 md:p-8">
          <h2 className="text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
            No trains available for your search
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Please try different stations or check back later
          </p>
        </div>
      </>
    );

  return (
    <div className="mt-4 sm:mt-6 md:mt-8">
      {!trains.length && (
        <>
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
            {/* <h2 className="text-center text-lg font-semibold text-gray-900 sm:text-xl md:text-left md:text-2xl">
              Available Trains <span className="text-cyan-600">(0)</span>
            </h2>
            <div className="flex justify-center md:justify-end">
              <Filter
                options={[
                  { value: "all", label: "All" },
                  { value: "VIP", label: "VIP" },
                  { value: "Express", label: "EXPRESS" },
                  { value: "Sleeper", label: "SLEEPER" },
                ]}
              />
            </div> */}
          </div>
          <div className="overflow-hidden rounded-xl bg-white p-4 text-center shadow-lg sm:p-6 md:p-8">
            <h2 className="text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
              Start Your Journey
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Search for trains by selecting your departure and arrival stations
            </p>
          </div>
        </>
      )}
      {trains.length > 0 && (
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-center text-lg font-semibold text-gray-900 sm:text-xl md:text-left md:text-2xl">
              Available Trains{" "}
              <span className="text-cyan-600">( {count} found )</span>
            </h2>
            <div className="flex justify-center md:justify-end">
              <Filter
                options={[
                  { value: "all", label: "All" },
                  { value: "VIP", label: "VIP" },
                  { value: "Express", label: "EXPRESS" },
                  { value: "Sleeper", label: "SLEEPER" },
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {trains?.map((train) => (
              <TrainItem key={train.id} train={train} />
            ))}
          </div>
          <div className="col-span-full">
            <Pagination numResults={count} />
          </div>
        </div>
      )}
    </div>
  );
}
