"use client";

import { useState } from "react";
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
import { Button } from "@/shared/ui/button";

// This is mock data. In a real application, you'd fetch this from an API.
const workers = [
  {
    id: "W001",
    fullName: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    status: "Active",
    hireDate: "2021-01-15",
  },
  {
    id: "W002",
    fullName: "Jane Smith",
    position: "Product Manager",
    department: "Product",
    status: "Active",
    hireDate: "2020-03-22",
  },
  {
    id: "W003",
    fullName: "Mike Johnson",
    position: "UX Designer",
    department: "Design",
    status: "Inactive",
    hireDate: "2019-11-05",
  },
  // Add more mock data as needed
];

export function WorkersTable() {
  const [workersData, setWorkersData] = useState(workers);

  const handleEdit = (workerId: string) => {
    // Implement edit functionality
    console.log(`Edit worker with ID: ${workerId}`);
  };

  const handleDelete = (workerId: string) => {
    setWorkersData(workersData.filter((worker) => worker.id !== workerId));
  };

  return (
    <Table>
      <TableCaption>A list of all workers.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Worker ID</TableHead>
          <TableHead>Full Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Hire Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workersData.map((worker) => (
          <TableRow key={worker.id}>
            <TableCell className="font-medium">{worker.id}</TableCell>
            <TableCell>{worker.fullName}</TableCell>
            <TableCell>{worker.position}</TableCell>
            <TableCell>{worker.department}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  worker.status === "Active"
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {worker.status}
              </span>
            </TableCell>
            <TableCell>{worker.hireDate}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleEdit(worker.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(worker.id)}
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
