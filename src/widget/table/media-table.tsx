"use client";
import { Table } from "@/shared/ui/table";
import React, { useState } from "react";
import MediaTableHeader from "./media-table-header";
import { mediaData } from "@/shared/constants";
import MediaTableBody from "./media-table-body";
import TableRowCount from "./table-row-count";
import { TablePagination } from "@/features/table";
import { useTable } from "@/shared/hook";

const MediaTable = () => {
  const {
    currentPage,
    handleSelectAllRows,
    handleSelectRow,
    paginatedData,
    selectedRows,
    setCurrentPage,
    totalPages,
  } = useTable<MediaTableItemSchema>(mediaData, 10);
  return (
    <div className="flex-1 flex flex-col">
      <Table>
        <MediaTableHeader
          handleSelectAllRows={handleSelectAllRows}
          length={mediaData.length}
          selectedRows={selectedRows}
        />
        <MediaTableBody
          handleSelectRow={handleSelectRow}
          paginatedData={paginatedData}
          selectedRows={selectedRows}
          length={mediaData.length}
        />
      </Table>
      <div className="flex items-center justify-between">
        <TableRowCount length={mediaData.length} selectedRows={selectedRows} />
        <TablePagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default MediaTable;
