"use server";
import prisma from "@/shared/lib/db";

export const departmentList = async ({
  page = 1,
  pageSize = 10,
}: PrismaPagination) => {
  try {
    const [total, data] = await Promise.all([
      prisma.department.count(),
      prisma.department.findMany({
        include: {
          manager: { select: { fullName: true, id: true } },
          employers: true,
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);
    const list = data?.map((item) => {
      const { employers, managerId, updatedAt, ...other } = item;
      return { ...other, count: employers.length };
    });
    return { list, total };
  } catch (error) {
    throw error;
  }
};
