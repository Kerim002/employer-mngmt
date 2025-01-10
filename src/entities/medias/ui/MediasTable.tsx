"use client";
import React, { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MediaRow from "./MediaRow";
import { mediaData } from "@/shared/constants";

const MediasTable = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(mediaData.length / itemsPerPage);

  const handleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    setSelectedRows((prev) =>
      prev.length === mediaData.length ? [] : mediaData.map((item) => item.id)
    );
  };

  const paginatedData = mediaData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={selectedRows.length === mediaData.length}
                onCheckedChange={handleSelectAllRows}
              />
            </TableHead>
            <TableHead className="w-[50px]">No</TableHead>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead className="hidden lg:table-cell">Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <MediaRow
              handleSelectRow={handleSelectRow}
              checked={selectedRows.length === mediaData.length}
              item={item}
              key={item.id}
            />
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {selectedRows.length} of {mediaData.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2 py-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MediasTable;
