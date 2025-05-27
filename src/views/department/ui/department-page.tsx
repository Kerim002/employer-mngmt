"use client";

import React from "react";
import { DepartmentsTable } from "@/entities/department/ui/departments-table";
import dynamic from "next/dynamic";
import { DepartmentDialog } from "@/widget";
import { QueryModalBtn } from "@/features/button";

const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  { loading: () => <></> }
);

export const DepartmentPage = () => {
  return (
    <div className="flex flex-col w-full px-4 md:px-8 py-6 gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Bölümler</h1>
        <QueryModalBtn>Döretmek</QueryModalBtn>
      </div>
      <DepartmentsTable />
      <DialogProvider>
        <DepartmentDialog />
      </DialogProvider>
    </div>
  );
};
