"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { actionDeleteAttendance } from "../action/action-delete-attendance";
import { useRouter } from "next/navigation";

export const useAttendanceDeleteMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      return await actionDeleteAttendance(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
      router.refresh();
    },
  });
  return { handleDeleteAttendance: mutate, isPending };
};
