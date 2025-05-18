import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteReservation as deleteReservationApi } from "../../services/apiReservations";

export function useDeleteReservation() {
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteReservationApi(id),
    onSuccess: () => {
      toast.success("Reservation deleted successfully!");
    },
    onError: (err) => {
      console.error(err);
      toast.err(err.message);
    },
  });
  return { mutate, isPending };
}
