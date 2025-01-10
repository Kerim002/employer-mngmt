import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { FaqDropdown } from "@/widget/dropdown";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const FaqColumn = (lang: any) => {
  const column: ColumnDef<FAQItemSchema>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: `question.${lang}`,
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Question
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        return <div className="">{row.getValue(`question_${lang}`)}</div>;
      },
    },
    {
      accessorKey: `answer.${lang}`,
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Answer
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="">{row.getValue(`answer_${lang}`)}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: (_) => {
        return <FaqDropdown />;
      },
    },
  ];

  return column;
};
