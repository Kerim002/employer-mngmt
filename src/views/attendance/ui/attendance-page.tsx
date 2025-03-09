import { AttendanceTable } from "@/entities/attendance/ui/attendance-table";
import { QueryModalBtn } from "@/features/button";
import { AttendanceDialog } from "@/widget";
import dynamic from "next/dynamic";
import React from "react";
const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  {
    loading: () => <></>,
  }
);
export const AttendancePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-end">
        <QueryModalBtn>Create</QueryModalBtn>
      </div>
      <AttendanceTable />
      <DialogProvider>
        <AttendanceDialog />
      </DialogProvider>
    </div>
  );
};
