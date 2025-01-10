import { Button } from "@/shared/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import React from "react";

const MediaRowPopover = () => {
  return (
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
  );
};

export default MediaRowPopover;
