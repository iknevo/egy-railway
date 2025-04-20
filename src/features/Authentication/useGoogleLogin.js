import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { googleLogin as googleLoginApi } from "../../services/apiAuth";

export function useGoogleLogin() {
  const queryClient = useQueryClient();
  const { mutate: googleLogin, isPending } = useMutation({
    mutationFn: googleLoginApi,
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
  return { googleLogin, isPending };
}
