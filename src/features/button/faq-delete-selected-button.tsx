import { Button } from "@/shared/ui/button";
import React from "react";
type Props = {
  isSomeRowsSelected: boolean;
};
const FaqDeleteSelectedButton = ({ isSomeRowsSelected }: Props) => {
  if (!isSomeRowsSelected) {
    return null;
  }
  return <Button className="bg-red-500 text-white">Delete</Button>;
};

export default FaqDeleteSelectedButton;
