"use client";

import { AttendanceTable } from "@/entities/attendance/ui/attendance-table";
import { QueryModalBtn } from "@/features/button";
import { AttendanceDialog } from "@/widget";
import dynamic from "next/dynamic";
import React from "react";

const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  { loading: () => <></> }
);

export const AttendancePage = () => {
  return (
    <div className="flex flex-col w-full px-4 md:px-8 py-6 gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Işgärleriň Gatnawlary</h1>
        <QueryModalBtn>Döretmek</QueryModalBtn>
      </div>
      <AttendanceTable />
      <DialogProvider>
        <AttendanceDialog />
      </DialogProvider>
    </div>
  );
};
