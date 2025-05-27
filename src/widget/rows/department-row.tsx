import { QueryEditBtn } from "@/features/button";
import { Button } from "@/shared/ui/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Trash2 } from "lucide-react";
import React from "react";

type Props = {
  department: {
    id: string;
    name: string;
    employeeCount: number;
    managerName?: string;
  };
  index: number;
};
export const DepartmentRow = ({ department, index }: Props) => {
  return (
    <TableRow key={department.id}>
      <TableCell className="font-medium">{index + 1}</TableCell>
      <TableCell>{department.name}</TableCell>
      <TableCell>{department.managerName}</TableCell>
      <TableCell>{department.employeeCount}</TableCell>
      <TableCell className="text-right space-x-2">
        <QueryEditBtn
          queries={[
            { key: "isModal", value: "true" },
            { key: "id", value: department.id },
          ]}
        />
        <Button
          variant="destructive"
          size="icon"
          //   onClick={() => handleDelete(department.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
