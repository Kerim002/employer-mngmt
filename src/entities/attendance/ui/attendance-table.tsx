"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/shared/ui/table";
import { AttendanceRow } from "@/widget";
import { useAttendanceListQuery } from "../api/useAttendanceListQuery";

export function AttendanceTable() {
  const { list } = useAttendanceListQuery();

  return (
    <div className="rounded-xl border shadow-sm overflow-x-auto">
      <Table>
        <TableCaption>Gündelik hasabat tablisasy</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-24 text-center">No</TableHead>
            <TableHead>Ady</TableHead>
            <TableHead>Giren wagty</TableHead>
            <TableHead>Çykan wagty</TableHead>
            <TableHead>Ýagdaýy</TableHead>
            <TableHead className="text-right">Hereketler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list?.map((record, index) => (
            <AttendanceRow key={record.id} index={index + 1} record={record} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
