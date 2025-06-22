import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation } from "react-router";
import { facebookLogin as facebookLoginApi } from "../../services/apiAuth";

export function useFacebookLogin() {
  const queryClient = useQueryClient();
  const { pathname: redirectTo } = useLocation();

  const { mutate: facebookLogin, isPending } = useMutation({
    mutationFn: () => facebookLoginApi({ redirectTo }),
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
