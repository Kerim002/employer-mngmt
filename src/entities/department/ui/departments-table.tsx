"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { useDepartmentQuery } from "../api/useDepartmentQuery";
import { DepartmentRow } from "@/widget";

export function DepartmentsTable() {
  const { list } = useDepartmentQuery();

  return (
    <div className="rounded-xl border shadow-sm overflow-x-auto">
      <Table>
        <TableCaption>Ähli bölümleriň sanawy</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20 text-center">No</TableHead>
            <TableHead>Bölüm Ady</TableHead>
            <TableHead>Menecer</TableHead>
            <TableHead>Jemi Işgärler</TableHead>
            <TableHead className="text-right">Hereketler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list?.map((department, index) => (
            <DepartmentRow
              key={department.id}
              department={department}
              index={index}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
