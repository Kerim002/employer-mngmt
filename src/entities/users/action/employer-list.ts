import prisma from "@/shared/lib/db";

export const employerList = async ({ page, pageSize }: PrismaPagination) => {
  return await prisma.employer.findMany({
    include: {},
  });
};
