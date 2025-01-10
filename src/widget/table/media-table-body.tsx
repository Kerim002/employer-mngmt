import { TableBody } from "@/shared/ui/table";
import React from "react";
import MediaRow from "./media-row";
type Props = {
  paginatedData: MediaTableItemSchema[];
  handleSelectRow: (id: number) => void;
  selectedRows: number[];
  length: number;
};
const MediaTableBody = ({
  paginatedData,
  handleSelectRow,
  selectedRows,
  length,
}: Props) => {
  return (
    <TableBody>
      {paginatedData.map((item) => (
        <MediaRow
          handleSelectRow={handleSelectRow}
          checked={selectedRows.length === length}
          item={item}
          key={item.id}
        />
      ))}
    </TableBody>
  );
};

export default MediaTableBody;
