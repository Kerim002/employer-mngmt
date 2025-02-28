import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widget/sidebar";
import React, { PropsWithChildren } from "react";

export const SideProvider = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="h-screen  w-full p-8 flex relative">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
