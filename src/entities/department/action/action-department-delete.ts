"use server";
import prisma from "@/shared/lib/db";

export const actionDepartmentDelete = async (id: string) => {
  try {
    const data = await prisma.department.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};
