import { useQuery } from "@tanstack/react-query";
import { getAllTrains as getAllTrainsApi } from "../../services/apiTrains";

export function useAllTrains() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AllTrains"],
    queryFn: getAllTrainsApi,
  });
  return { data, isLoading, error };
}
