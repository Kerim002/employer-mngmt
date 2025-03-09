import { UserManagementTable } from "@/entities/users/ui/user-table";
import { ManagementDialog } from "@/widget";
import dynamic from "next/dynamic";
import React from "react";
const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  {
    loading: () => <></>,
  }
);
export const UsersPage = () => {
  return (
    <div className="flex flex-col w-full">
      <UserManagementTable />
      <DialogProvider>
        <ManagementDialog />
      </DialogProvider>
    </div>
  );
};
