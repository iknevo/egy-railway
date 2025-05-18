import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addReseravation as addReseravationApi } from "../../services/apiReservations";

export function useAddReservation() {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => addReseravationApi(data),
    onSuccess: () => {
      toast.success("Reservation added successfully!");
    },
    onError: (err) => {
      console.error(err);
      toast.err(err.message);
    },
  });
  return { mutate, isPending };
}
