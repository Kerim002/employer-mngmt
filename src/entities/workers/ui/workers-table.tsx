"use client";

import {
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/shared/ui/table";
import { WorkersRow } from "@/widget";
import { useWorkerList } from "../api/useWorkerList";

export function WorkersTable() {
  const { list } = useWorkerList({});
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Isgar ID</TableHead>
          <TableHead>Ady</TableHead>
          <TableHead>Wezipesi</TableHead>
          {/* <TableHead>Bölümi</TableHead> */}
          <TableHead>Ýagdaýy</TableHead>
          <TableHead>Ise giren wagty</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list?.map((worker, index) => (
          <WorkersRow key={worker.id} worker={worker} index={index + 1} />
        ))}
      </TableBody>
    </Table>
  );
}
