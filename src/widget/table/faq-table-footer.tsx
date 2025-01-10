import { Row } from "@tanstack/react-table";
import React from "react";
type Props = {
  filteredSelectedRowModel: Row<FAQItemSchema>[];
  filteredRowModel: Row<FAQItemSchema>[];
};
const FaqTableFooter = ({
  filteredRowModel,
  filteredSelectedRowModel,
}: Props) => {
  return (
    <div className="flex-1 text-sm text-muted-foreground">
      {filteredSelectedRowModel.length} of
      {filteredRowModel.length} row(s) selected.
    </div>
  );
};

export default FaqTableFooter;
