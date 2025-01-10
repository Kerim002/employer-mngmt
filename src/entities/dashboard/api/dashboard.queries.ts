import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getDashboard } from "./get-dashboard";

export const dashboardQueries = {
  all: () => ["posts"],

  lists: () => [...dashboardQueries.all(), "list"],
  list: () =>
    queryOptions({
      queryKey: [...dashboardQueries.lists()],
      queryFn: () => getDashboard(),
      placeholderData: keepPreviousData,
    }),
};
