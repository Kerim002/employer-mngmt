"use server";

import prisma from "@/shared/lib/db";
import { Attendance } from "@prisma/client";

export const actionUpdateAttendance = async (data: Attendance) => {
  try {
    const { id, ...other } = data;
    return await prisma.attendance.update({
      where: { id },
      data: other,
    });
  } catch (error) {
    throw error;
  }
};
