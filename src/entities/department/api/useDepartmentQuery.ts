import { useQuery } from "@tanstack/react-query";
import { departmentList } from "../action/department-list";

export const useDepartmentQuery = (pagination?: PrismaPagination) => {
  const { data } = useQuery({
    queryKey: ["department"],
    queryFn: () => departmentList(pagination ?? {}),
    select: (data) => {
      const list = data.map((department) => {
        const { name, manager, id } = department;
        if (manager) {
          const { fullName } = manager;
          return { name, id, managerName: fullName, employeeCount: 10 };
        }
        return { name, id, employeeCount: 10 };
      });
      return list;
    },
  });
  return { list: data };
};
