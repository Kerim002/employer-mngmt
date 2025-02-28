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
    fullName: "Meret Meredow",
    position: "Satyjy",
    department: "Satyjylyk",
    status: "Active",
    hireDate: "2021-01-15",
  },
  {
    id: "W002",
    fullName: "Aman Amanow",
    position: "Önüm Manager",
    department: "Önüm",
    status: "Active",
    hireDate: "2020-03-22",
  },
  {
    id: "W003",
    fullName: "Aman Amanow",
    position: "Önüm Manager",
    department: "Önüm",
    status: "Active",
    hireDate: "2020-03-22",
  },
  {
    id: "W004",
    fullName: "Aman Amanow",
    position: "Önüm Manager",
    department: "Önüm",
    status: "Inactive",
    hireDate: "2020-03-22",
  },
  {
    id: "W005",
    fullName: "Aman Amanow",
    position: "Önüm Manager",
    department: "Önüm",
    status: "Active",
    hireDate: "2020-03-22",
  },
  {
    id: "W006",
    fullName: "Aman Amanow",
    position: "Önüm Manager",
    department: "Önüm",
    status: "Active",
    hireDate: "2020-03-22",
  },
  {
    id: "W007",
    fullName: "Aman Amanow",
    position: "Önüm Manager",
    department: "Önüm",
    status: "Active",
    hireDate: "2020-03-22",
  },
  {
    id: "W008",
    fullName: "Aman Amanow",
    position: "Önüm Manager",
    department: "Önüm",
    status: "Inactive",

    hireDate: "2020-03-22",
  },
  {
    id: "W009",
    fullName: "Aman Amanow",
    position: "Önüm Manager",
    department: "Önüm",
    status: "Inactive",

    hireDate: "2020-03-22",
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
      <TableHeader>
        <TableRow>
          <TableHead>Isgar ID</TableHead>
          <TableHead>Ady</TableHead>
          <TableHead>Wezipesi</TableHead>
          <TableHead>Bölümi</TableHead>
          <TableHead>Ýagdaýy</TableHead>
          <TableHead>Giren wagty</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
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
