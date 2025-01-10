import { Input } from "@/shared/ui/input";
import { SquareXIcon } from "lucide-react";
import React from "react";
type Props = {
  setGlobalFilter: (value: React.SetStateAction<string>) => void;
  globalFilter: string;
};
const FaqSearch = ({ setGlobalFilter, globalFilter }: Props) => {
  return (
    <div className="max-w-sm w-full relative flex items-center ">
      <Input
        placeholder="Filter answer..."
        value={globalFilter}
        onChange={(event) => setGlobalFilter(event.target.value)}
        className="pr-10"
      />
      <SquareXIcon
        onClick={() => setGlobalFilter("")}
        className="absolute right-3 text-gray-400"
      />
    </div>
  );
};

export default FaqSearch;
