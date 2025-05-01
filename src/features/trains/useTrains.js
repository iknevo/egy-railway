import { useQuery } from "@tanstack/react-query";
import { getTrains as getTrainsApi } from "../../services/apiTrains";

export function useTrains({ trainFrom, trainTo, search }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trains", trainFrom, trainTo],
    queryFn: () => getTrainsApi({ trainFrom, trainTo }),
    enabled: search,
  });
  return { data, isLoading, error };
}
