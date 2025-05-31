import Loader from "../../ui/Loader";
import PopularTrainItem from "./PopularTrainItem";
import { usePoularTrains } from "./usePopularTrains";
export default function PopularTrains() {
  const { data: popularTrains = [], isLoading } = usePoularTrains();

  return isLoading ? (
    <Loader />
  ) : (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {popularTrains.map((route, index) => (
        <PopularTrainItem route={route} index={index} key={route.id} />
      ))}
    </div>
  );
}
