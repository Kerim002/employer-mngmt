import { WorkersTable } from "@/entities/workers/ui/workers-table";
import { QueryModalBtn } from "@/features/button";
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
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-end">
        <QueryModalBtn>Create</QueryModalBtn>
      </div>
      <WorkersTable />
      <DialogProvider>
        <WorkersDialog />
      </DialogProvider>
    </div>
  );
};
