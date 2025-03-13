import { useMutation } from "@tanstack/react-query";
import { actionCreateAttendance } from "../action/action-create-attendance";
import { Attendance } from "@prisma/client";

export const useAttendanceCreateMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (body: Omit<Attendance, "id">) => {
      return await actionCreateAttendance(body);
    },
  });
  return { handleCreateAttendance: mutate, isPending };
};
