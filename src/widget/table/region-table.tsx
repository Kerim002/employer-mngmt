"use client";
import { Table } from "@/shared/ui/table";
import { type Table as TableModel } from "@tanstack/react-table";
type Props = {
  table: TableModel<FAQItemSchema>;
};
const RegionTable = ({ table }: Props) => {
  return <Table>RegionTable</Table>;
};

export default RegionTable;
