"use server";
import prisma from "@/shared/lib/db";
import { EmployerJoinDepartmentPayload } from "@/types/employer";

export const actionWorkerJoinDepartment = async ({
  id,
  departmentId,
}: EmployerJoinDepartmentPayload) => {
  try {
    return await prisma.employer.update({
      where: { id },
      data: { departmentId },
    });
  } catch (error) {
    throw error;
  }
};
