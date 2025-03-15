import { useQuery } from "@tanstack/react-query";
import { actionListAttendance } from "../action/action-list-attendance";

export const useAttendanceListQuery = () => {
  const { data } = useQuery({
    queryKey: ["attendance"],
    queryFn: async () => {
      return await actionListAttendance();
    },
  });
  return { list: data };
};
