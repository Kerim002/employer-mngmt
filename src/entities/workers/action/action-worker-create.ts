"use server";
import prisma from "@/shared/lib/db";
import { EmployerPayloadSchema } from "@/types/employer";
import cuid from "cuid";

export const actionWorkerCreate = async (payload: EmployerPayloadSchema) => {
  try {
    const job = await prisma.job.findFirst({ where: { name: payload.job } });

    const data = await prisma.employer.create({
      data: {
        fullName: payload.fullName,
        phone: payload.phone,
        state: payload.state,
        jobs: {
          create: {
            name: payload.job,
            id: cuid(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
