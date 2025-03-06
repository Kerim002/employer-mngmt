"use server";
import prisma from "@/shared/lib/db";

export const departmentEmployers = async () => {
  return await prisma.department.findMany({
    include: {
      _count: { select: { employers: true } },
      employers: true,
    },
  });
};
