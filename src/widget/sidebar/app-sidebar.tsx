"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/shared/ui/sidebar";
import { sidebarData } from "@/shared/constants";
import { NavMain } from "./nav-main";
import { TeamSwitcher } from "./team-switcher";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <Sidebar collapsible={isCollapsed ? "offcanvas" : undefined} {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
      </SidebarContent>

      <SidebarRail>
        <div className="mt-auto flex justify-center p-2">
          <div onClick={toggleSidebar} className="rounded-full">
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </div>
        </div>
      </SidebarRail>
    </Sidebar>
  );
}
