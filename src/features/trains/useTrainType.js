import { useQuery } from "@tanstack/react-query";
import { getTrainType as getTrainTypeApi } from "../../services/apiTrains";

export function useTrainType(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trainType", id],
    queryFn: () => getTrainTypeApi(id),
    enabled: !!id,
  });
  return { data, isLoading, error };
}
