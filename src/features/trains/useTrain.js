import { useQuery } from "@tanstack/react-query";
import { getTrain as getTrainApi } from "../../services/apiTrains";

export function useTrain(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["train", id],
    queryFn: () => getTrainApi(id),
    enabled: !!id,
  });
  return { data, isLoading, error };
}
