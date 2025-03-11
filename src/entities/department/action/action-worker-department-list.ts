"use server";
import prisma from "@/shared/lib/db";

export const actionWorkerDepartmentList = async () => {
  try {
    const list = prisma.employer.findMany({
      select: { id: true, fullName: true },
    });
    return list;
  } catch (error) {
    throw error;
  }
};
