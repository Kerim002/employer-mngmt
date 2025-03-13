import { useMutation } from "@tanstack/react-query";
import { actionDeleteAttendance } from "../action/action-delete-attendance";

export const useAttendanceCreateMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      return await actionDeleteAttendance(id);
    },
  });
  return { handleCreateAttendance: mutate, isPending };
};
