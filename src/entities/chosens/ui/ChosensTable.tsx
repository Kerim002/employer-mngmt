import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import React from "react";
import ChosenRow from "./ChosenRow";

const ChosensTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Total videos</TableHead>
          <TableHead>Created at</TableHead>
          <TableHead className="w-20">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <ChosenRow />
      </TableBody>
    </Table>
  );
};

export default ChosensTable;
