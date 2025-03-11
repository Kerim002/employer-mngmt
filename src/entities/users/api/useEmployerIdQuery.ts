import { useQuery } from "@tanstack/react-query";
import { actionEmployerId } from "../action/action-employer-id";

export const useEmployerIdQuery = (id?: string) => {
  const { data } = useQuery({
    queryKey: ["worker", id],
    queryFn: async () => {
      return await actionEmployerId(id ?? "");
    },
    enabled: !!id,
  });
  return { worker: data };
};
