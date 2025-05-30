import { useQuery } from "@tanstack/react-query";
import { getPopularTrains } from "../../services/apiTrains";

export function usePoularTrains() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popularTrains"],
    queryFn: getPopularTrains,
  });
  return { data, isLoading, error };
}
