"use client";
import * as React from "react";

import { FAQData } from "@/shared/constants";
import { FaqTableModel } from "@/entities/faq";
import { FaqSearch } from "@/features/search";
import { FaqLanguageSelect } from "@/features/select";
import { FaqTable } from "@/widget/table";
import { FaqDeleteSelectedButton } from "@/features/button";
import FaqTableFooter from "@/widget/table/faq-table-footer";

const FaqPage = () => {
  const [lang, setLang] = React.useState<LanguageShortVariant>("tm");
  const { table, globalFilter, setGlobalFilter } = FaqTableModel(FAQData, lang);

  return (
    <div className="w-full">
      <div className="flex items-center py-4 justify-between">
        <div className="w-full flex gap-4">
          <FaqSearch
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <FaqDeleteSelectedButton
            isSomeRowsSelected={table.getIsSomeRowsSelected()}
          />
        </div>
        <FaqLanguageSelect lang={lang} setLang={setLang} />
      </div>
      <div className="flex flex-col rounded-md  overflow-y-auto h-[68dvh] ">
        <FaqTable table={table} />
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <FaqTableFooter
          filteredRowModel={table.getFilteredRowModel().rows}
          filteredSelectedRowModel={table.getFilteredSelectedRowModel().rows}
        />
      </div>
    </div>
  );
};

export default FaqPage;
