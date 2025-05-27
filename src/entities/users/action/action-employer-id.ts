"use server";

import prisma from "@/shared/lib/db";

export const actionEmployerId = async (id: string) => {
  try {
    return await prisma.employer.findFirst({
      where: { id },
    });
  } catch (error) {
    throw error;
  }
};
