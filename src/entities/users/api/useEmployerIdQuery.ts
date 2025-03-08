import { useQuery } from "@tanstack/react-query";
import { employerId } from "../action/employer-id";

export const useEmployerQuery = (id: string) => {
  const {} = useQuery({
    queryKey: ["employer", id],
    queryFn: async () => {
      try {
        return await employerId(id);
      } catch (error) {}
    },
  });
};
