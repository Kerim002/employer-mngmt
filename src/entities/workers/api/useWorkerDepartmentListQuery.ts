import { useQuery } from "@tanstack/react-query";
import { actionWorkerDepartmentList } from "../action/action-worker-department-list";

export const useWorkerDepartmentListQuery = (enabled?: boolean) => {
  const { data } = useQuery({
    queryKey: ["worker", "department", "list"],
    queryFn: async () => {
      return await actionWorkerDepartmentList();
    },
    enabled,
  });
  return { workerList: data };
};
