import React from "react";
import { DepartmentsTable } from "@/entities/department/ui/departments-table";
import dynamic from "next/dynamic";
import { DepartmentDialog } from "@/widget";
import { QueryModalBtn } from "@/features/button";
const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  {
    loading: () => <></>,
  }
);
export const DepartmentPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-end">
        <QueryModalBtn>Create</QueryModalBtn>
      </div>
      <DepartmentsTable />
      <DialogProvider>
        <DepartmentDialog />
      </DialogProvider>
    </div>
  );
};
