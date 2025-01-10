import { Checkbox } from "@/shared/ui/checkbox";
import { TableCell, TableRow } from "@/shared/ui/table";
import Image from "next/image";
import React from "react";
import { MediaRowPopover } from "../popover";
type Props = {
  item: MediaTableItemSchema;
  checked: boolean;
  handleSelectRow: (id: number) => void;
};
const MediaRow = ({ checked, handleSelectRow, item }: Props) => {
  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={checked}
          onCheckedChange={() => handleSelectRow(item.id)}
        />
      </TableCell>
      <TableCell>{item.id}</TableCell>
      <TableCell>
        <Image
          src="/test/user.png"
          alt="Placeholder"
          width={50}
          height={50}
          className="rounded-md"
        />
      </TableCell>
      <TableCell>{item.date}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>{item.username}</TableCell>
      <TableCell>{item.tags.join(", ")}</TableCell>
      <TableCell className="max-w-[200px] truncate hidden lg:table-cell">
        {item.description}
      </TableCell>
      <TableCell className="text-right">
        <MediaRowPopover />
      </TableCell>
    </TableRow>
  );
};

export default MediaRow;
