"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/shared/ui/sidebar";
import { useRouter } from "next/navigation";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { push } = useRouter();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={() => push("/")}
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          {/* <div
            onClick={() => toggleSidebar()}
            className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
          ></div> */}
          <div className="grid grid-cols-2 gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <div className="w-3 h-3 bg-black rounded-full" />
            <div className="w-3 h-3 bg-black rounded-full" />
            <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Admin Panel</span>
            <span className="truncate text-xs">Gülzemin söwda merkezi</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
