"use client";

import { useState } from "react";
import {
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/shared/ui/table";
import { AttendanceRow } from "@/widget";

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
    console.log(`Edit attendance for worker with ID: ${workerId}`);
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
          <AttendanceRow key={record.workerId} record={record} />
        ))}
      </TableBody>
    </Table>
  );
}
