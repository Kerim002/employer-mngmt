"use client";

import { useState } from "react";
import {
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/shared/ui/table";
import { AttendanceRow } from "@/widget";
import { useAttendanceListQuery } from "../api/useAttendanceListQuery";

export function AttendanceTable() {
  const { list } = useAttendanceListQuery();

  return (
    <Table>
      <TableCaption>Gundelik hasabat.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Isgar No</TableHead>
          <TableHead>Ady</TableHead>
          <TableHead>Giren wagty</TableHead>
          <TableHead>Gelen wagty</TableHead>
          <TableHead>Ýagdaýy</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list?.map((record, index) => (
          <AttendanceRow index={index} key={record.id} record={record} />
        ))}
      </TableBody>
    </Table>
  );
}
