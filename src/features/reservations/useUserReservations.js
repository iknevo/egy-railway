import { useQuery } from "@tanstack/react-query";
import { getReservations as getReservationsApi } from "../../services/apiReservations";

export function useUserReservations(userId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations", userId],
    queryFn: () => getReservationsApi(userId),
    enabled: !!userId,
  });
  return { data, isLoading, error };
}
