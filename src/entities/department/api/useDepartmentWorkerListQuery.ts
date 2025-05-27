import { useQuery } from "@tanstack/react-query";
import { actionDepartmentWorkerList } from "../action/action-department-worker-list";

export const useDepartmentWorkerListQuery = (enabled?: boolean) => {
  const { data } = useQuery({
    queryKey: ["department", "worker", "list"],
    queryFn: async () => {
      return await actionDepartmentWorkerList();
    },
    enabled,
  });
  return { departmentList: data };
};
