import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { facebookLogin as facebookLoginApi } from "../../services/apiAuth";

export function useFacebookLogin() {
  const queryClient = useQueryClient();
  const { mutate: facebookLogin, isPending } = useMutation({
    mutationFn: facebookLoginApi,
    onSuccess: (data) => {
      if (data?.user) {
        queryClient.setQueryData(["user"], data.user);
      }
    },
    onError: (error) => {
      console.error(error.message);
      toast.error(error.message);
    },
  });
  return { facebookLogin, isPending };
}
