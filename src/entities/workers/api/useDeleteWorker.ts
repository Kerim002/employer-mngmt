import { useMutation, useQueryClient } from "@tanstack/react-query";
import { actionWorkerDelete } from "../action/action-worker-delete";

export const useDeleteWorker = () => {
  const queryClient = useQueryClient();
  const { mutate, data, isPending } = useMutation({
    mutationKey: ["workerDelete"],
    mutationFn: async (id: string) => {
      return actionWorkerDelete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["worker"] });
    },
  });

  return { handleDeleteWorker: mutate, data, isPending };
};
