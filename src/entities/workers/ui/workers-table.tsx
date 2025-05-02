"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/shared/ui/table";
import { WorkersRow } from "@/widget";
import { useWorkerList } from "../api/useWorkerList";
import "react-photo-view/dist/react-photo-view.css";

export function WorkersTable() {
  const { list } = useWorkerList({});

  return (
    <div className="overflow-auto rounded-lg border border-muted">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted">
            <TableHead>#</TableHead>
            <TableHead>Suraty</TableHead>
            <TableHead>Ady</TableHead>
            <TableHead>Wezipesi</TableHead>
            <TableHead>Ýagdaýy</TableHead>
            <TableHead>Işe giren senesi</TableHead>
            <TableHead className="text-right">Hereketler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list?.map((worker, index) => (
            <WorkersRow key={worker.id} worker={worker} index={index + 1} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
