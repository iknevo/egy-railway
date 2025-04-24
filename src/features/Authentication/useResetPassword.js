import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";

export function useResetPassword(email) {
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: () => resetPasswordApi(email),
    onSuccess: () => {
      toast.success("Email sent!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { resetPassword, isPending };
}
