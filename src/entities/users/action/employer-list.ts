"use server";
import prisma from "@/shared/lib/db";

export const employerList = async ({
  page = 1,
  pageSize = 10,
}: PrismaPagination) => {
  try {
    const [total, data] = await Promise.all([
      prisma.employer.count(),
      prisma.employer.findMany({
        where: { jobId: { not: null }, departmentId: { not: null } },
        include: {
          jobs: true,
          department: { include: { manager: true } },
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);

    const list = data.map((item) => ({
      fullName: item.fullName,
      job: item.jobs ? { name: item.jobs.name, id: item.jobs.id } : null,
      manager: item.department?.manager?.fullName,
      id: item.id,
    }));

    return { total, list };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
