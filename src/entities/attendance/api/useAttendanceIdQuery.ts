import { useQuery } from "@tanstack/react-query";

export const useAttendanceIdQuery = (id: string) => {
  const { data } = useQuery({
    queryKey: ["attendance", id],
  });
  return { attendance: data };
};
