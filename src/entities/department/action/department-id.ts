"use server";
import prisma from "@/shared/lib/db";

export const departmentId = async (id: string) => {
  return await prisma.department.findFirst({
    where: { id },
    include: {
      employers: true,
      manager: true,
    },
  });
};
