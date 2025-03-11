import { useMutation, useQueryClient } from "@tanstack/react-query";
import { departmentCreate } from "../action/action-department-create";
import { useRouter } from "next/navigation";

export const useCreateDepartmentMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (department: DepartmentCreatePayload) => {
      return departmentCreate(department);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["department"] });
      queryClient.invalidateQueries({ queryKey: ["worker"] });
      router.refresh();
    },
  });
  return { handleCreateDepartment: mutate, isPending };
};
