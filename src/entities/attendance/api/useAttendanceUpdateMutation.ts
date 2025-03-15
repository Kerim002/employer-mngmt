import { useMutation } from "@tanstack/react-query";
import { Attendance } from "@prisma/client";
import { actionUpdateAttendance } from "../action/action-update-attendance";

export const useAttendanceUpdateMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (body: Attendance) => {
      return await actionUpdateAttendance(body);
    },
  });
  return { handleCreateAttendance: mutate, isPending };
};
