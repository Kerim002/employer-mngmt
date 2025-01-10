"use client";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center  py-2 border border-red-600">
      <Link href="/login">Login </Link>
      <Button
        onClick={() => {
          toast.success("tttess");
        }}
      >
        Hello
      </Button>
    </div>
  );
}
