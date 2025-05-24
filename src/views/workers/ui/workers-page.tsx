import { WorkersTable } from "@/entities/workers/ui/workers-table";
import { QueryModalBtn } from "@/features/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { WorkersDialog } from "@/widget";
import dynamic from "next/dynamic";
import React from "react";

const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  {
    loading: () => <></>,
  }
);

export const WorkersPage = () => {
  return (
    <div className="flex flex-col w-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Işgärler Sanawy</h1>
        <QueryModalBtn>
          <span className="font-semibold">Täze goşmak</span>
        </QueryModalBtn>
      </div>

      <WorkersTable />
      <DialogProvider>
        <WorkersDialog />
      </DialogProvider>
    </div>
  );
};
