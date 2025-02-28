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
import { Pencil } from "lucide-react";
import { Button } from "@/shared/ui/button";

// Mock data for attendance
const initialAttendance = [
  {
    workerId: "W001",
    fullName: "Aman Amanow",
    date: "2023-05-15",
    checkInTime: "09:00",
    checkOutTime: "17:30",
    status: "Geldi",
  },
  {
    workerId: "W002",
    fullName: "Aman Amanow",
    date: "2023-05-15",
    checkInTime: "08:45",
    checkOutTime: "17:15",
    status: "Geldi",
  },
  {
    workerId: "W003",
    fullName: "Aman Amanow",
    date: "2023-05-15",
    checkInTime: "-",
    checkOutTime: "-",
    status: "Gija galan",
  },
  {
    workerId: "W004",
    fullName: "Aman Amanow",
    date: "2023-05-15",
    checkInTime: "09:15",
    checkOutTime: "16:45",
    status: "Geldi",
  },
];

export function AttendanceTable() {
  const [attendance, setAttendance] = useState(initialAttendance);

  const handleEdit = (workerId: string) => {
    // Implement edit functionality
    console.log(`Edit attendance for worker with ID: ${workerId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "present":
        return "bg-green-200 text-green-800";
      case "absent":
        return "bg-red-200 text-red-800";
      case "late":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <Table>
      <TableCaption>Gundelik hasabat.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Isgar ID</TableHead>
          <TableHead>Ady</TableHead>
          <TableHead>Giren wagty</TableHead>
          <TableHead>Gelen wagty</TableHead>
          <TableHead>Giden wagty</TableHead>
          <TableHead>Ýagdaýy</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendance.map((record) => (
          <TableRow key={record.workerId}>
            <TableCell className="font-medium">{record.workerId}</TableCell>
            <TableCell>{record.fullName}</TableCell>
            <TableCell>{record.date}</TableCell>
            <TableCell>{record.checkInTime}</TableCell>
            <TableCell>{record.checkOutTime}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                  record.status
                )}`}
              >
                {record.status}
              </span>
            </TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleEdit(record.workerId)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
