import { NextRequest, NextResponse } from "next/server";
import { stat, mkdir, writeFile } from "fs/promises";
import { join } from "path";
import mime from "mime";
import { PrismaClient } from "@prisma/client";
import cuid from "cuid";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = (formData.get("name") as string) || null;
  const jobMain = (formData.get("job") as string) || null;
  const phone = (formData.get("phone") as string) || null;
  const state = (formData.get("state") as "active" | "inactive") || null;
  const image = (formData.get("image") as File) || null;
  const buffer = Buffer.from(await image.arrayBuffer());
  const relativeUploadDir = `/uploads/${new Date(Date.now())
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;

  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      // This is for checking the directory is exist (ENOENT : Error No Entry)
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${image.name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    const fileUrl = `${relativeUploadDir}/${filename}`;
    //  const job = await prisma.job.findFirst({ where: { name: payload.job } });
    const result = await prisma.employer.create({
      data: {
        avatar: fileUrl,
        fullName: name ? name : "",
        phone: phone ? phone : "",
        jobs: {
          create: {
            name: jobMain ? jobMain : "",
            id: cuid(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
        state,
      },
    });

    return NextResponse.json({ user: result });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
