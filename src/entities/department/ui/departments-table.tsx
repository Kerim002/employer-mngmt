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

// Mock data for departments
const departments = [
  {
    id: "D001",
    name: "Hasap",
    managerName: "Aman Amanow",
    employeeCount: 50,
  },
  {
    id: "D002",
    name: "Marketing",
    managerName: "Aman Amanow",
    employeeCount: 25,
  },
  {
    id: "D003",
    name: "Işgärler",
    managerName: "Aman Amanow",
    employeeCount: 15,
  },
  {
    id: "D004",
    name: "Oba hojalyk",
    managerName: "Aman Amanow",
    employeeCount: 20,
  },
];

export function DepartmentsTable() {
  const handleEdit = (departmentId: string) => {
    // Implement edit functionality
    console.log(`Edit department with ID: ${departmentId}`);
  };

  const handleDelete = (departmentId: string) => {
    // Implement delete functionality
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
        {departments.map((department) => (
          <TableRow key={department.id}>
            <TableCell className="font-medium">{department.id}</TableCell>
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
