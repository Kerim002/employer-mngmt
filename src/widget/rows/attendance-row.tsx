import { useAttendanceDeleteMutation } from "@/entities/attendance/api/useAttendanceDeleteMutation";
import { QueryEditBtn } from "@/features/button";
import { Button } from "@/shared/ui/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import { format } from "date-fns";
import { Pencil, Trash } from "lucide-react";
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
    id: string;
    enterAt: Date | null;
    exitAt: Date | null;
    state: string;
    employers: {
      fullName: string;
    } | null;
  };
  index: number;
};

export const AttendanceRow = ({ record, index }: Props) => {
  const { handleDeleteAttendance } = useAttendanceDeleteMutation();
  return (
    <TableRow>
      <TableCell className="font-medium text-center">{index}</TableCell>
      <TableCell>{record.employers?.fullName}</TableCell>
      <TableCell>
        {record.enterAt ? `${format(record.enterAt, "dd.MM.yyyy")}` : "-"}
      </TableCell>
      <TableCell>
        {record.exitAt ? `${format(record.exitAt, "dd.MM.yyyy")}` : "-"}
      </TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
            record.state
          )}`}
        >
          {record.state}
        </span>
      </TableCell>
      <TableCell className="text-right">
        <Button
          onClick={() => handleDeleteAttendance(record.id)}
          variant="destructive"
        >
          <Trash />
        </Button>
        {/* <QueryEditBtn queries={[{ key: "isModal", value: "true" }]} /> */}
      </TableCell>
    </TableRow>
  );
};
