"use client";

import { Button } from "@/shared/ui/button";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/shared/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { useDepartmentQuery } from "../api/useDepartmentQuery";
import { useDepartmentEmployersQuery } from "../api/useDepartmentEmployersQuery";

export function DepartmentsTable() {
  const { list } = useDepartmentQuery();
  const { list: employeeCount } = useDepartmentEmployersQuery();
  console.log(employeeCount);
  const handleEdit = (departmentId: string) => {
    console.log(`Edit department with ID: ${departmentId}`);
  };

  const handleDelete = (departmentId: string) => {
    console.log(`Delete department with ID: ${departmentId}`);
  };

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
          <TableRow key={department.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{department.name}</TableCell>
            <TableCell>{department.managerName}</TableCell>
            <TableCell>{department.employeeCount}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleEdit(department.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(department.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
