import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";
import { departmentEmployers } from "../action/department-employers";

export const useDepartmentEmployersQuery = () => {
  const { data } = useQuery({
    queryKey: ["department", "employers"],
    queryFn: () => departmentEmployers(),
    select: (data) => {
      const list = data.flatMap((item) =>
        item.employers.map((employer) => {
          const { fullName, id } = employer;
          return { id, managerName: fullName };
        })
      );
      return { list, total: data[0]._count };
    },
  });
  return { ...data };
};
