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

  const handleEdit = (userId: string) => {
    // Implement edit functionality
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleDelete = (userId: string) => {
    // Implement delete functionality
    setUsers(users.filter((user) => user.userId !== userId));
  };

  const handleAddUser = () => {
    // Implement add user functionality
    console.log("Add new user");
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

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Işçileri dolandyrmak</h2>
        <Button onClick={handleAddUser}>
          <UserPlus className="mr-2 h-4 w-4" /> Işçi goşmak
        </Button>
      </div>
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
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEdit(user.userId)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(user.userId)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
