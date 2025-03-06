"use server";
import prisma from "@/shared/lib/db";
import cuid from "cuid";

export const departmentCreate = async (department: DepartmentCreatePayload) => {
  return await prisma.department.create({
    data: {
      managerId: department.managerId,
      name: department.name,
      id: cuid(),
    },
  });
};
