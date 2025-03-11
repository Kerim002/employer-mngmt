"use client";

import {
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/shared/ui/table";
import { useDepartmentQuery } from "../api/useDepartmentQuery";
import { DepartmentRow } from "@/widget";

export function DepartmentsTable() {
  const { list } = useDepartmentQuery();

  return (
    <Table>
      <TableCaption>Ähli bölümler</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Bölüm ID</TableHead>
          <TableHead>Bölüm Id</TableHead>
          <TableHead>Manager Ady</TableHead>
          <TableHead>Jemi işçiler</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
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
  );
}
