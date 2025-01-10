import { SettingsSidebar } from "@/widget/sidebar";
import React from "react";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <div className="flex gap-8 h-full ">
        <SettingsSidebar />
        <div className="border w-full h-full rounded-lg p-8">{children}</div>
      </div>
    </div>
  );
}
