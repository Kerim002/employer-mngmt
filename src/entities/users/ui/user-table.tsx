"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { useEmployerListQuery } from "../api/useEmployerListQuery";
import { UsersRow } from "@/widget";

export function UserManagementTable() {
  const { list } = useEmployerListQuery({});
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Işçi ID</TableHead>
          <TableHead>Ady</TableHead>
          <TableHead>Wezipesi</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list?.map((user, index) => (
          <UsersRow key={user.id} index={index + 1} user={user} />
        ))}
      </TableBody>
    </Table>
  );
}
