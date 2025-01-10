"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "./input";
import { SidebarTrigger } from "./sidebar";

export function Navbar() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search submitted");
  };

  return (
    <nav className="w-full flex items-center p-3 bg-background border-b border-border fixed top-0">
      <SidebarTrigger className="-ml-1" />
      <div className="w-full flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex-grow max-w-md mx-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </form>
      </div>
    </nav>
  );
}
