"use server";
import prisma from "@/shared/lib/db";

export const departmentUpdate = async (department: DepartmentUpdatePayload) => {
  return await prisma.department.update({
    where: { id: department.id },
    data: { managerId: department.managerId, name: department.name },
  });
};
