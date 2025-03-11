import { QueryEditBtn } from "@/features/button";
import { Button } from "@/shared/ui/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Trash2 } from "lucide-react";
import React from "react";

type Props = {
  department: {
    count: number;
    manager: {
      id: string;
      fullName: string;
    } | null;
    id: string;
    name: string;
    createdAt: Date;
  };
  index: number;
};
export const DepartmentRow = ({ department, index }: Props) => {
  return (
    <TableRow key={department.id}>
      <TableCell className="font-medium">{index + 1}</TableCell>
      <TableCell>{department.name}</TableCell>
      <TableCell>{department.manager?.fullName}</TableCell>
      <TableCell>{department.count}</TableCell>
      <TableCell className="text-right space-x-2">
        <QueryEditBtn
          queries={[
            { key: "isModal", value: "true" },
            { key: "id", value: department.id },
          ]}
        />
        <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
