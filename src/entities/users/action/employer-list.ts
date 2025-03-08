"use server";
import prisma from "@/shared/lib/db";

export const employerList = async ({
  page = 1,
  pageSize = 10,
}: PrismaPagination) => {
  try {
    const [total, list] = await Promise.all([
      prisma.employer.count(),
      prisma.employer.findMany({
        include: { department: true, job: true },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);
    return { total, list };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
