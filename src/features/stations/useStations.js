import { useQuery } from "@tanstack/react-query";
import { getAllStations as getAllStationsApi } from "../../services/apiStations";

export function useStations() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stations"],
    queryFn: getAllStationsApi,
  });
  return { data, isLoading, error };
}
