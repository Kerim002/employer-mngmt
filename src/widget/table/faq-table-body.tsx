import { TableBody, TableCell, TableRow } from "@/shared/ui/table";
import { ColumnDef, flexRender, Row, RowModel } from "@tanstack/react-table";
import React from "react";
type Props = {
  rowModel: RowModel<FAQItemSchema>;
  columns: ColumnDef<FAQItemSchema>[];
};
const FaqTableBody = ({ rowModel, columns }: Props) => {
  return (
    <TableBody className="">
      {rowModel.rows?.length ? (
        rowModel.rows.map((row) => {
          return (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          );
        })
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default FaqTableBody;
