import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";
import { FaqColumn } from "./faq-column";

export const FaqTableModel = (data: any, lang: LanguageShortVariant) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const columns = FaqColumn(lang);
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    globalFilterFn: (row, _, filterValue) => {
      const question = row.original.question[lang].toLowerCase();
      const answer = row.original.answer[lang].toLowerCase();
      return (
        question.includes(filterValue.toLowerCase()) ||
        answer.includes(filterValue.toLowerCase())
      );
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
      pagination: {
        pageIndex: 0,
        pageSize: data.length,
      },
    },
  });

  return { table, globalFilter, setGlobalFilter };
};
