import { Button } from "@/shared/ui/button";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { TableCell, TableRow } from "@/shared/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const ChosenRow = () => {
  return (
    <TableRow>
      <TableCell>1</TableCell>
      <TableCell>
        <Image src="/test/user.png" alt="" width={40} height={40} />
      </TableCell>
      <TableCell>Hansoltan lybaslary</TableCell>
      <TableCell>4</TableCell>
      <TableCell>06.10.2025</TableCell>

      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default ChosenRow;
