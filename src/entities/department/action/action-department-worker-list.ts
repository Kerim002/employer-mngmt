"use server";

import prisma from "@/shared/lib/db";

export const actionDepartmentWorkerList = async () => {
  try {
    return await prisma.department.findMany({
      select: { id: true, name: true },
    });
  } catch (error) {
    throw error;
  }
};
