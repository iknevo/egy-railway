import { useQuery } from "@tanstack/react-query";
import { getAvailabelTrains as getAvailabelTrainsApi } from "../../services/apiTrains";

export function useAvailableTrains({ fromId, toId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["availableTrains"],
    queryFn: () => getAvailabelTrainsApi({ fromId, toId }),
    enabled: Boolean(fromId) && Boolean(toId),
  });
  return { data, isLoading, error };
}
