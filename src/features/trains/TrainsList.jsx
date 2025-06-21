import Filter from "../../ui/Filter";
import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import TrainItem from "./TrainItem";
import { useTrains } from "./useTrains";

export default function TrainsList({ fromStation, toStation, search }) {
  const {
    data: trains,
    count,
    isLoading: isLoadingTrains,
  } = useTrains({
    trainFrom: fromStation,
    trainTo: toStation,
    search,
  });

  if (isLoadingTrains) return <Loader />;

  if (!trains?.length && (fromStation || toStation || search))
    return (
      <div className="mt-8 overflow-hidden rounded-xl bg-white p-8 text-center shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900">
          No trains available for your search
        </h2>
        <p className="mt-2 text-gray-600">
          Please try different stations or check back later
        </p>
      </div>
    );

  return (
    <div className="mt-8">
      {!trains && (
        <div className="overflow-hidden rounded-xl bg-white p-8 text-center shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            Start Your Journey
          </h2>
          <p className="mt-2 text-gray-600">
            Search for trains by selecting your departure and arrival stations
          </p>
        </div>
      )}

      {trains && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              Available Trains{" "}
              <span className="text-cyan-600">( {count} found )</span>
            </h2>
            <div>
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
