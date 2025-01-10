"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/shared/ui/sidebar";
import { AppSidebarItem } from "@/features/sidebar";

export function NavMain({ items }: { items: SidebarItemSchema[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <AppSidebarItem key={item.title} {...item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
