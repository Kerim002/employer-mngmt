import React from "react";
import { SidebarGroup, SidebarMenu } from "@/shared/ui/sidebar";
import { settingsSidebarData } from "@/shared/constants";
import { SettingsSidebarItem } from "@/features/sidebar";

const SettingsSidebar = () => {
  return (
    <div className="w-96 border rounded-lg h-full bg-sidebar">
      <SidebarGroup>
        <SidebarMenu>
          {settingsSidebarData.map((item, index) => (
            <SettingsSidebarItem key={index} {...item} />
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </div>
  );
};

export default SettingsSidebar;
