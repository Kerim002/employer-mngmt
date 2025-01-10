import { Table, TableHead, TableHeader, TableRow } from "@/shared/ui/table";
import React from "react";

const CategoryTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  );
};

export default CategoryTable;
