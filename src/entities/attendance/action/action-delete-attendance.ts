"use server";

import prisma from "@/shared/lib/db";

export const actionDeleteAttendance = async (id: string) => {
  try {
    return await prisma.attendance.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
};
