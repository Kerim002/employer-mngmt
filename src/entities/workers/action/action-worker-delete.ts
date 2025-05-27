"use server";

import prisma from "@/shared/lib/db";

export const actionWorkerDelete = async (id: string) => {
  try {
    return await prisma.employer.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};
