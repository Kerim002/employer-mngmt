import { SidebarMenuButton, SidebarMenuItem } from "@/shared/ui/sidebar";
import Link from "next/link";
import React from "react";

const SettingsSidebarItem = (item: SettingsSidebarItemSchema) => {
  return (
    <SidebarMenuItem>
      <Link href={item.url}>
        <SidebarMenuButton>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
};

export default SettingsSidebarItem;
