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
import { WorkersRow } from "@/widget";

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

  // const handleEdit = (workerId: string) => {
  //   console.log(`Edit worker with ID: ${workerId}`);
  // };

  // const handleDelete = (workerId: string) => {
  //   setWorkersData(workersData.filter((worker) => worker.id !== workerId));
  // };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Isgar ID</TableHead>
          <TableHead>Ady</TableHead>
          <TableHead>Wezipesi</TableHead>
          <TableHead>Bölümi</TableHead>
          <TableHead>Ýagdaýy</TableHead>
          <TableHead>Ise giren wagty</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workersData.map((worker) => (
          <WorkersRow key={worker.id} worker={worker} />
        ))}
      </TableBody>
    </Table>
  );
}
