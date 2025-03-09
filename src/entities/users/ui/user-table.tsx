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
import { Pencil, Trash2, UserPlus } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { UsersRow } from "@/widget";

// Mock data for users
const initialUsers = [
  {
    userId: "U001",
    username: "Aman Amanow",
    role: "Admin",
    email: "amanow@example.com",
  },
  {
    userId: "U002",
    username: "Aman Amanow",
    role: "Manager",
    email: "amanow@example.com",
  },
  {
    userId: "U003",
    username: "Aman Amanow",
    role: "User",
    email: "amanow@example.com",
  },
  {
    userId: "U004",
    username: "Aman Amanow",
    role: "HR",
    email: "amanow@example.com",
  },
];

export function UserManagementTable() {
  const [users, setUsers] = useState(initialUsers);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Işçi ID</TableHead>
          <TableHead>Ady</TableHead>
          <TableHead>Wezipesi</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <UsersRow key={user.userId} user={user} />
        ))}
      </TableBody>
    </Table>
  );
}
