"use server";
import prisma from "@/shared/lib/db";
import { Attendance } from "@prisma/client";
import cuid from "cuid";

export const actionCreateAttendance = async (data: Omit<Attendance, "id">) => {
  try {
    return await prisma.attendance.create({ data: { ...data, id: cuid() } });
  } catch (error) {
    throw error;
  }
};
