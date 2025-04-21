import { useQuery } from "@tanstack/react-query";
import { getStationById as getStationByIdApi } from "../../services/apiStations";

export function useStation(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["station", id],
    queryFn: () => getStationByIdApi(id),
    enabled: !!id,
  });
  return { data, isLoading, error };
}
