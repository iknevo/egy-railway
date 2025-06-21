import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getTrains as getTrainsApi } from "../../services/apiTrains";
import { RESULTS_PER_PAGE } from "../../utils/constants";

export function useTrains({ trainFrom, trainTo, search }) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("filter") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "level", value: filterValue };
  const page = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const {
    data: { data, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trains", trainFrom, trainTo, page, filter],
    queryFn: () => getTrainsApi({ trainFrom, trainTo, page, filter }),
    enabled: search,
  });

  // prefetching
  const pagesCount = Math.ceil(count / RESULTS_PER_PAGE);
  if (page < pagesCount) {
    queryClient.prefetchQuery({
      queryKey: ["trains", trainFrom, trainTo, page + 1, filter],
      queryFn: () =>
        getTrainsApi({ trainFrom, trainTo, page: page + 1, filter }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["trains", trainFrom, trainTo, page - 1, filter],
      queryFn: () =>
        getTrainsApi({ trainFrom, trainTo, page: page - 1, filter }),
    });
  }
  return { data, count, isLoading, error };
}
