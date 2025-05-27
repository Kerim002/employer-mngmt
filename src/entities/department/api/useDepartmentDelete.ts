import { useMutation, useQueryClient } from "@tanstack/react-query";
import { actionDepartmentDelete } from "../action/action-department-delete";

export const useDepartmentDelete = () => {
  const queryClient = useQueryClient();
  const { mutate, data, isPending } = useMutation({
    mutationKey: ["departmentDelete"],
    mutationFn: async (id: string) => {
      return actionDepartmentDelete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["department"] });
    },
  });

  return { handleDeleteDepartment: mutate, data, isPending };
};
