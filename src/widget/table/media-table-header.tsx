import { Checkbox } from "@/shared/ui/checkbox";
import { TableHead, TableHeader, TableRow } from "@/shared/ui/table";
import React from "react";
type Props = {
  selectedRows: number[];
  handleSelectAllRows: () => void;
  length: number;
};
const MediaTableHeader = ({
  handleSelectAllRows,
  length,
  selectedRows,
}: Props) => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[50px]">
          <Checkbox
            checked={selectedRows.length === length}
            onCheckedChange={handleSelectAllRows}
          />
        </TableHead>
        <TableHead className="w-[50px]">No</TableHead>
        <TableHead className="w-[100px]">Image</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Category</TableHead>
        <TableHead>Username</TableHead>
        <TableHead>Tags</TableHead>
        <TableHead className="hidden lg:table-cell">Description</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default MediaTableHeader;
