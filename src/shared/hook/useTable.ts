"use client";
import { useState } from "react";

export const useTable = <T extends { id: number }>(
  data: T[],
  itemsPerPage = 10
) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    setSelectedRows((prev) =>
      prev.length === data.length ? [] : data.map((item) => item.id)
    );
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return {
    selectedRows,
    currentPage,
    totalPages,
    handleSelectRow,
    handleSelectAllRows,
    paginatedData,
    setCurrentPage,
  };
};
