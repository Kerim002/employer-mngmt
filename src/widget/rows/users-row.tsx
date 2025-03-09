import { QueryEditBtn } from "@/features/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import React from "react";

type Props = {
  user: {
    userId: string;
    username: string;
    role: string;
    email: string;
  };
};

const getRoleColor = (role: string) => {
  switch (role.toLowerCase()) {
    case "admin":
      return "bg-red-200 text-red-800";
    case "manager":
      return "bg-blue-200 text-blue-800";
    case "hr":
      return "bg-green-200 text-green-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

export const UsersRow = ({ user }: Props) => {
  return (
    <TableRow key={user.userId}>
      <TableCell className="font-medium">{user.userId}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded-full text-xs ${getRoleColor(
            user.role
          )}`}
        >
          {user.role}
        </span>
      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell className="text-right">
        {/* <Button
          variant="ghost"
          size="icon"
          onClick={() => handleEdit(user.userId)}
        >
          <Pencil className="h-4 w-4" />
        </Button> */}
        <QueryEditBtn
          queries={[
            { key: "isModal", value: "true" },
            { key: "id", value: user.userId },
          ]}
        />
      </TableCell>
    </TableRow>
  );
};
