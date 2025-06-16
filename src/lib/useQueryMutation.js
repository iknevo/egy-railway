import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axios";

export function useQueryMutation(endpoint) {
  return useMutation({
    mutationFn: (data) => axiosInstance.post(endpoint, data),
  });
}
