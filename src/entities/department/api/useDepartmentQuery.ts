import { useQuery } from "@tanstack/react-query";
import { departmentList } from "../action/action-department-list";

export const useDepartmentQuery = (pagination?: PrismaPagination) => {
  const { data } = useQuery({
    queryKey: ["department"],
    queryFn: async () => {
      return departmentList(pagination ?? {});
    },
  });
  return { ...data };
};
