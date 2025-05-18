import { useQuery } from "@tanstack/react-query";
import { getTrainById as getTrainByIdApi } from "../../services/apiTrains";

export function useTrain(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["train", id],
    queryFn: () => getTrainByIdApi(id),
    enabled: !!id,
  });
  return { data, isLoading, error };
}
