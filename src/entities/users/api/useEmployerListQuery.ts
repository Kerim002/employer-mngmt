import { useQuery } from "@tanstack/react-query";
import { employerList } from "../action/employer-list";

export const useEmployerListQuery = (body?: PrismaPagination) => {
  const { data } = useQuery({
    queryKey: ["employer"],
    queryFn: async () => {
      try {
        return await employerList(body ?? {});
      } catch (error) {
        throw error;
      }
    },
    select: ({ list: lists, total }) => {
      const list = lists.map((item) => {
        const { department, job, jobId, departmentId, ...other } = item;
        return {
          ...other,
          department: { name: department?.name, id: department?.id },
          job: { name: job.name, id: job.id },
        };
      });
      return { list, total };
    },
  });
  return { ...data };
};
