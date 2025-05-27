import { useQuery } from "@tanstack/react-query";

import { actionWorkerDepartmentList } from "../action/action-worker-department-list";

export const useDepartmentEmployersQuery = () => {
  const { data } = useQuery({
    queryKey: ["worker", "department"],
    queryFn: async () => {
      return await actionWorkerDepartmentList();
    },
  });
  return { list: data };
};
