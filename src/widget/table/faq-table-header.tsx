import { TableHead, TableHeader, TableRow } from "@/shared/ui/table";
import { flexRender, HeaderGroup } from "@tanstack/react-table";
import React from "react";
type Props = {
  headerGroups: HeaderGroup<FAQItemSchema>[];
};
const FaqTableHeader = ({ headerGroups }: Props) => {
  return (
    <TableHeader className="sticky top-0 bg-background z-10">
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead className="bg-background " key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default FaqTableHeader;
