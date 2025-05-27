"use server";

import prisma from "@/shared/lib/db";

export const actionListAttendance = async () => {
  try {
    return await prisma.attendance.findMany({
      select: {
        id: true,
        enterAt: true,
        exitAt: true,
        state: true,
        employers: { select: { fullName: true } },
      },
    });
  } catch (error) {
    throw error;
  }
};
