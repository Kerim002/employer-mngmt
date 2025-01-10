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
    username: "john_admin",
    role: "Admin",
    email: "john@example.com",
  },
  {
    userId: "U002",
    username: "jane_manager",
    role: "Manager",
    email: "jane@example.com",
  },
  {
    userId: "U003",
    username: "mike_user",
    role: "User",
    email: "mike@example.com",
  },
  {
    userId: "U004",
    username: "sarah_hr",
    role: "HR",
    email: "sarah@example.com",
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
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">User Management</h2>
        <Button onClick={handleAddUser}>
          <UserPlus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>
      <Table>
        <TableCaption>List of system users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
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
