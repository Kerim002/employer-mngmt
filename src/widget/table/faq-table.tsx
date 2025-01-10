import { Table } from "@/shared/ui/table";
import FaqTableHeader from "./faq-table-header";
import { Table as TableModel } from "@tanstack/react-table";
import FaqTableBody from "./faq-table-body";
type Props = {
  table: TableModel<FAQItemSchema>;
};
const FaqTable = ({ table }: Props) => {
  return (
    <Table className="relative">
      <FaqTableHeader headerGroups={table.getHeaderGroups()} />
      <FaqTableBody
        rowModel={table.getRowModel()}
        columns={table._getColumnDefs()}
      />
    </Table>
  );
};

export default FaqTable;
