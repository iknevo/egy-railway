import { useQuery } from "@tanstack/react-query";
import { getReservation as getReservationApi } from "../../services/apiReservations";

export function useReservation(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservation", id],
    queryFn: () => getReservationApi(id),
    enabled: !!id,
  });
  return { data, isLoading, error };
}
