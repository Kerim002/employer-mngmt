"use server";
import prisma from "@/shared/lib/db";
import cuid from "cuid";

export const departmentCreate = async (department: DepartmentCreatePayload) => {
  try {
    return await prisma.department.create({
      data: {
        managerId: department.managerId,
        name: department.name,
        id: cuid(),
      },
    });
  } catch (error) {
    throw error;
  }
};
