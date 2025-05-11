import Loader from "../../ui/Loader";
import TrainItem from "./TrainItem";
import { useTrains } from "./useTrains";

export default function TrainsList({ fromStation, toStation, search }) {
  const { data: trains, isLoading: isLoadingTrains } = useTrains({
    trainFrom: fromStation,
    trainTo: toStation,
    search,
  });
  if (isLoadingTrains) return <Loader />;
  if (!trains?.length && (fromStation || toStation || search))
    return (
      <div className="py-8">
        <h2 className="text-center text-3xl font-semibold">
          There's No available trains for your search
        </h2>
      </div>
    );

  return (
    <div>
      <div className="mt-8">
        {!trains && (
          <h2 className="text-center text-3xl font-semibold">
            Start By Searching your destination!
          </h2>
        )}
        {trains && (
          <h2 className="mb-4 text-xl font-semibold">Available Trips</h2>
        )}
        <div className="space-y-4"></div>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {trains?.map((train) => (
          <TrainItem key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
}
