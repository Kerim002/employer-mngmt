import React from "react";
import { SideProvider } from "./provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SideProvider>{children}</SideProvider>;
}
