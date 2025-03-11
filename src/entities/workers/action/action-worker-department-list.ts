"use server";

import prisma from "@/shared/lib/db";

export const actionWorkerDepartmentList = async () => {
  try {
    return await prisma.employer.findMany({
      select: { fullName: true, id: true },
    });
  } catch (error) {
    throw error;
  }
};
