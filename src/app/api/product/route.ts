import { NextRequest, NextResponse } from "next/server";
import { stat, mkdir, writeFile } from "fs/promises";
import { join } from "path";
import mime from "mime";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = (formData.get("name") as string) || null;
  const price = (Number(formData.get("price")) as number) || null;
  const count = (Number(formData.get("count")) as number) || null;
  const primaryPrice =
    (Number(formData.get("primary_price")) as number) || null;
  const type = (formData.get("type") as string) || null;
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

    // Save to database
    const result = await prisma.product.create({
      data: {
        name: name ?? "",
        count: count ?? 0,
        price: price ?? 0,
        primaryPrice: primaryPrice ?? 0,
        type: type ?? "",
        image: fileUrl,
        profit: price ? price - (primaryPrice ?? 0) : 0,
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
