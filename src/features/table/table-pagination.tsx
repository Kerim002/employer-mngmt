import { Button } from "@/shared/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
type Props = {
  setCurrentPage: (value: React.SetStateAction<number>) => void;
  currentPage: number;
  totalPages: number;
};
const TablePagination = ({
  setCurrentPage,
  currentPage,
  totalPages,
}: Props) => {
  return (
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
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TablePagination;
