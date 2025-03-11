"use server";
import prisma from "@/shared/lib/db";

export const actionWorkerList = async ({
  page = 1,
  pageSize = 10,
}: PrismaPagination) => {
  try {
    const [total, data] = await Promise.all([
      prisma.employer.count(),
      prisma.employer.findMany({
        include: {
          jobs: true,
          department: true,
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);

    const list = data.map((item) => ({
      fullName: item.fullName,
      job: item.jobs ? { name: item.jobs.name, id: item.jobs.id } : null,
      department: item.department
        ? { name: item.department.name, id: item.department.id }
        : null,
      state: item.state,
      id: item.id,
      createdAt: item.createdAt,
    }));

    return { total, list };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
