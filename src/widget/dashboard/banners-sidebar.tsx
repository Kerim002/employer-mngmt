import React from "react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Settings2Icon } from "lucide-react";
import Link from "next/link";

const list = [
  {
    title: "All",
    url: "/banners/all",
    icon: Settings2Icon,
  },
  {
    title: "Main page",
    url: "/banners/mainpage",
    icon: Settings2Icon,
  },
  {
    title: "Top users ",
    url: "/banners/topusers",
    icon: Settings2Icon,
  },
];
const BannersSidebar = () => {
  return (
    <div className="w-96 border rounded-lg h-full bg-sidebar">
      <SidebarGroup>
        <SidebarMenu>
          {list.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link href={item.url}>
                <SidebarMenuButton>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </div>
  );
};

export default BannersSidebar;
