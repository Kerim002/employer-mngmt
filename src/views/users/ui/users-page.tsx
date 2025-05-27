"use client";

import { UserManagementTable } from "@/entities/users/ui/user-table";
import { QueryModalBtn } from "@/features/button";
import { ManagementDialog } from "@/widget";
import dynamic from "next/dynamic";
import React from "react";

const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  { loading: () => <></> }
);

export const UsersPage = () => {
  return (
    <div className="flex flex-col w-full px-4 md:px-8 py-6 gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Işgärler</h1>
        <QueryModalBtn>Döretmek</QueryModalBtn>
      </div>
      <UserManagementTable />
      <DialogProvider>
        <ManagementDialog />
      </DialogProvider>
    </div>
  );
};
