import { SidebarMenuButton, SidebarMenuItem } from "@/shared/ui/sidebar";
import Link from "next/link";
import React from "react";

const AppSidebarItem = (item: SidebarItemSchema) => {
  return (
    <SidebarMenuItem key={item.title}>
      <Link href={item.url}>
        <SidebarMenuButton tooltip={item.title}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
};

export default AppSidebarItem;
