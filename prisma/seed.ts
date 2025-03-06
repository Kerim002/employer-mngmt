import { PrismaClient } from "@prisma/client";
import cuid from "cuid";
const prisma = new PrismaClient();
const job = {
  consumer: "Satyjy",
  productManager: "Önüm Manager",
  admin: "Admin",
  hr: "HR",
};
async function main() {
  await prisma.job.createMany({
    data: [
      { id: cuid(), name: job.admin },
      { id: cuid(), name: job.consumer },
      { id: cuid(), name: job.hr },
      { id: cuid(), name: job.productManager },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
