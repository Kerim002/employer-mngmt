import { useMutation, useQueryClient } from "@tanstack/react-query";
import { actionCreateAttendance } from "../action/action-create-attendance";
import { Attendance } from "@prisma/client";
import { useRouter } from "next/navigation";

export const useAttendanceCreateMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (body: Omit<Attendance, "id">) => {
      return await actionCreateAttendance(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
      router.refresh();
    },
  });
  return { handleCreateAttendance: mutate, isPending };
};
