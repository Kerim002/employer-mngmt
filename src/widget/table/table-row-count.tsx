import React from "react";
type Props = {
  length: number;
  selectedRows: number[];
};
const TableRowCount = ({ length, selectedRows }: Props) => {
  return (
    <div className="text-sm text-muted-foreground">
      {selectedRows.length} of {length} row(s) selected.
    </div>
  );
};

export default TableRowCount;
