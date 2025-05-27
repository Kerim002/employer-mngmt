import { useQuery } from "@tanstack/react-query";
import { actionWorkerList } from "../action/action-worker-list";

export const useWorkerList = (pagination: PrismaPagination) => {
  const { data, isLoading } = useQuery({
    queryKey: ["worker", pagination],
    queryFn: async () => {
      try {
        const res = await actionWorkerList(pagination);
        return res;
      } catch (error) {
        throw error;
      }
    },
  });
  return { ...data, isLoading };
};
