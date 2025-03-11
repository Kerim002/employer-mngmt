import { useMutation, useQueryClient } from "@tanstack/react-query";
import { actionWorkerJoinDepartment } from "../action/action-worker-join-department";
import { EmployerJoinDepartmentPayload } from "@/types/employer";
import { useRouter } from "next/navigation";

export const useWorkerJoinDepartmentMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: async (body: EmployerJoinDepartmentPayload) => {
      return await actionWorkerJoinDepartment(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employer"] });
      router.refresh();
    },
  });
  return { handleWorkerJoinDepartment: mutate, isPending };
};
