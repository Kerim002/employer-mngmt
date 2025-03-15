"use server";

import prisma from "@/shared/lib/db";

export const actionIdAttendance = async (id: string) => {
  try {
    return await prisma.attendance.findFirst({
      where: { id },
      select: {
        enterAt: true,
        exitAt: true,
        id: true,
        employerId: true,
        state: true,
      },
    });
  } catch (error) {
    throw error;
  }
};
