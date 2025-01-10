import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  item: {
    id: number;
    image: string;
    date: string;
    category: string;
    username: string;
    tags: string[];
    description: string;
  };
  checked: boolean;

  handleSelectRow: (id: number) => void;
};

const MediaRow = ({ item, handleSelectRow, checked }: Props) => {
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
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40" align="end">
            <div className="flex flex-col space-y-1">
              <Button variant="ghost" size="sm" className="justify-start">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start text-red-600 hover:text-red-600 hover:bg-red-100"
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  );
};

export default MediaRow;
