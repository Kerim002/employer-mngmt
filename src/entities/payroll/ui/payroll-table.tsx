"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Pencil, Download } from "lucide-react";
import { Button } from "@/shared/ui/button";

// Mock data for payroll
const initialPayroll = [
  {
    workerId: "W001",
    fullName: "John Doe",
    paymentDate: "2023-05-31",
    grossSalary: 5000,
    deductions: 1000,
    netSalary: 4000,
    paymentStatus: "Paid",
  },
  {
    workerId: "W002",
    fullName: "Jane Smith",
    paymentDate: "2023-05-31",
    grossSalary: 5500,
    deductions: 1100,
    netSalary: 4400,
    paymentStatus: "Paid",
  },
  {
    workerId: "W003",
    fullName: "Mike Johnson",
    paymentDate: "2023-05-31",
    grossSalary: 4800,
    deductions: 960,
    netSalary: 3840,
    paymentStatus: "Pending",
  },
  {
    workerId: "W004",
    fullName: "Sarah Williams",
    paymentDate: "2023-05-31",
    grossSalary: 5200,
    deductions: 1040,
    netSalary: 4160,
    paymentStatus: "Paid",
  },
];

export function PayrollTable() {
  const [payroll] = useState(initialPayroll);
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-200 text-green-800";
      case "pending":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <Table>
      <TableCaption>Payroll records for the current month.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Worker ID</TableHead>
          <TableHead>Full Name</TableHead>
          <TableHead>Payment Date</TableHead>
          <TableHead>Gross Salary</TableHead>
          <TableHead>Deductions</TableHead>
          <TableHead>Net Salary</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payroll.map((record) => (
          <TableRow key={record.workerId}>
            <TableCell className="font-medium">{record.workerId}</TableCell>
            <TableCell>{record.fullName}</TableCell>
            <TableCell>{record.paymentDate}</TableCell>
            <TableCell>${record.grossSalary.toFixed(2)}</TableCell>
            <TableCell>${record.deductions.toFixed(2)}</TableCell>
            <TableCell>${record.netSalary.toFixed(2)}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                  record.paymentStatus
                )}`}
              >
                {record.paymentStatus}
              </span>
            </TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon"
                // onClick={() => handleEdit(record.workerId)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                // onClick={() => handleDownload(record.workerId)}
              >
                <Download className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
