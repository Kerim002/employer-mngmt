import { useMutation, useQueryClient } from "@tanstack/react-query";
import { actionWorkerCreate } from "../action/action-worker-create";
import { useRouter } from "next/navigation";
import { EmployerPayloadSchema } from "@/types/employer";

export const useCreateEmployer = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, data, isPending } = useMutation({
    mutationKey: ["employer"],
    mutationFn: async (payload: EmployerPayloadSchema) => {
      console.log(payload);
      return actionWorkerCreate({ ...payload, id: undefined });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["worker"] });
      router.refresh();
    },
  });

  return { handleCreateWorker: mutate, data, isPending };
};
