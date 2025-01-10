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
    name: "Engineering",
    managerName: "John Doe",
    employeeCount: 50,
  },
  {
    id: "D002",
    name: "Marketing",
    managerName: "Jane Smith",
    employeeCount: 25,
  },
  {
    id: "D003",
    name: "Human Resources",
    managerName: "Mike Johnson",
    employeeCount: 15,
  },
  {
    id: "D004",
    name: "Finance",
    managerName: "Sarah Williams",
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
      <TableCaption>A list of all departments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Department ID</TableHead>
          <TableHead>Department Name</TableHead>
          <TableHead>Manager Name</TableHead>
          <TableHead>Number of Employees</TableHead>
          <TableHead className="text-right">Actions</TableHead>
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
