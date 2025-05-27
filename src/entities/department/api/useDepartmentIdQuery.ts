import { useQuery } from "@tanstack/react-query";
import { departmentId } from "../action/department-id";

export const useDepartmentIdQuery = (id?: string) => {
  const { data } = useQuery({
    queryKey: ["department", id],
    queryFn: async () => {
      return await departmentId(id ?? "");
    },
    enabled: !!id,
  });
  return { department: data };
};
