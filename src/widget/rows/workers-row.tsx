import { QueryEditBtn } from "@/features/button";
import { Button } from "@/shared/ui/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Trash2 } from "lucide-react";
import React from "react";

type Props = {
  worker: {
    id: string;
    fullName: string;
    position: string;
    department: string;
    hireDate: string;
    status: string;
  };
};

export const WorkersRow = ({ worker }: Props) => {
  return (
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
      <TableCell className="text-right space-x-2">
        <QueryEditBtn
          queries={[
            { key: "isModal", value: "true" },
            { key: "id", value: worker.id },
          ]}
        />
        <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
