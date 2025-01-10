import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import BannerRow from "./BannerRow";
const BannersTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">No</TableHead>
          <TableHead className="w-[50px]">Image</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Links</TableHead>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <BannerRow />
        <BannerRow />
      </TableBody>
    </Table>
  );
};

export default BannersTable;
