"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/shared/ui/table";
import { useEmployerListQuery } from "../api/useEmployerListQuery";
import { UsersRow } from "@/widget";

export function UserManagementTable() {
  const { list } = useEmployerListQuery({});

  return (
    <div className="rounded-xl border shadow-sm overflow-x-auto">
      <Table>
        <TableCaption>Hasaba alnan işgärler sanawy</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20 text-center">No</TableHead>
            <TableHead>Ady</TableHead>
            <TableHead>Wezipesi</TableHead>
            <TableHead>Baglanyşykly Menejer</TableHead>
            <TableHead className="text-right">Hereketler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-auto">
          {list?.map((user, index) => (
            <UsersRow key={user.id} index={index + 1} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
