import { useQuery } from "@tanstack/react-query";
import { getAllTrains as getAllTrainsApi } from "../../services/apiTrains";

export function useTrains() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trains"],
    queryFn: getAllTrainsApi,
  });
  return { data, isLoading, error };
}
