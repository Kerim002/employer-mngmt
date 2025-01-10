import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import React from "react";

const AppSidebarLogoutBtn = () => {
  return (
    <DropdownMenuItem>
      <LogOut />
      Log out
    </DropdownMenuItem>
  );
};

export default AppSidebarLogoutBtn;
