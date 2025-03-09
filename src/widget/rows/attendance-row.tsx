import { QueryEditBtn } from "@/features/button";
import { Button } from "@/shared/ui/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Pencil } from "lucide-react";
import React from "react";

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

type Props = {
  record: {
    workerId: string;
    fullName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    status: string;
  };
};

export const AttendanceRow = ({ record }: Props) => {
  return (
    <TableRow>
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
        <QueryEditBtn queries={[{ key: "isModal", value: "true" }]} />
      </TableCell>
    </TableRow>
  );
};
