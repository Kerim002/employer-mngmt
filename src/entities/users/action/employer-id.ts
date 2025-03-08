"use server";
import prisma from "@/shared/lib/db";

export const employerId = async (id: string) => {
  try {
    return await prisma.employer.findFirst({
      where: { id },
    });
  } catch (error) {
    throw error;
  }
};
