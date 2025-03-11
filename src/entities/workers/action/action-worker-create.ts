"use server";
import prisma from "@/shared/lib/db";
import { EmployerPayloadSchema } from "@/types/employer";
import cuid from "cuid";

export const actionWorkerCreate = async (payload: EmployerPayloadSchema) => {
  if (!payload || typeof payload !== "object") {
    throw new TypeError(
      "Invalid payload: expected an object, but got " + typeof payload
    );
  }
  try {
    const job = await prisma.job.findFirst({ where: { name: payload.job } });
    const data = await prisma.employer.upsert({
      where: { id: payload.id },
      update: {
        fullName: payload.fullName,
        phone: payload.phone,
        state: payload.state,
        jobs: {
          connectOrCreate: {
            where: { id: job?.id },
            create: {
              name: payload.job,
              id: cuid(),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        },
      },
      create: {
        fullName: payload.fullName,
        phone: payload.phone,
        state: payload.state,
        jobs: {
          connectOrCreate: {
            where: { id: job?.id },
            create: {
              name: payload.job,
              id: cuid(),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        },
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
