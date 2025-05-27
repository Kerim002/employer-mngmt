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
  });
  return { ...data };
};
