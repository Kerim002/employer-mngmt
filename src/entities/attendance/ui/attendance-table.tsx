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
    fullName: "John Doe",
    date: "2023-05-15",
    checkInTime: "09:00",
    checkOutTime: "17:30",
    status: "Present",
  },
  {
    workerId: "W002",
    fullName: "Jane Smith",
    date: "2023-05-15",
    checkInTime: "08:45",
    checkOutTime: "17:15",
    status: "Present",
  },
  {
    workerId: "W003",
    fullName: "Mike Johnson",
    date: "2023-05-15",
    checkInTime: "-",
    checkOutTime: "-",
    status: "Absent",
  },
  {
    workerId: "W004",
    fullName: "Sarah Williams",
    date: "2023-05-15",
    checkInTime: "09:15",
    checkOutTime: "16:45",
    status: "Present",
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
      <TableCaption>Attendance record for today.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Worker ID</TableHead>
          <TableHead>Full Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Check-in Time</TableHead>
          <TableHead>Check-out Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
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
