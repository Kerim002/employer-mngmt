"use server";
import prisma from "@/shared/lib/db";

export const departmentList = async ({
  page = 1,
  pageSize = 10,
}: PrismaPagination) => {
  return await prisma.department.findMany({
    include: {
      manager: true,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
};
