import BannersSidebar from "@/widget/dashboard/banners-sidebar";
import React from "react";

const BannerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold tracking-tight">Banners</h2>
      </div>
      <div className="flex gap-8 h-full ">
        {/* <SettingsSidebar /> */}
        <BannersSidebar />
        <div className="border w-full h-full rounded-lg">{children}</div>
      </div>
    </div>
  );
};

export default BannerLayout;
