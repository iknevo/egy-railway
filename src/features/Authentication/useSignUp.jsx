import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfull created! Please confirm your email!.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { signUp, isPending };
}
