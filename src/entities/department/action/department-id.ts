"use server";
import prisma from "@/shared/lib/db";

export const departmentId = async (id: string) => {
  try {
    return await prisma.department.findFirst({
      select: {
        id: true,
        name: true,
        manager: { select: { fullName: true, id: true } },
      },
      where: { id },
    });
  } catch (error) {
    throw error;
  }
};
