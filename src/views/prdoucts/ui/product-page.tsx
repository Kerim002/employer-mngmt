import { ProductTable } from "@/entities/products/ui/product-table";
import { QueryModalBtn } from "@/features/button";
import React from "react";

type Props = {
  type: "milk" | "meat" | "foodstuffs";
};

const ProductPage = ({ type }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-end">
        <QueryModalBtn>Create</QueryModalBtn>
      </div>
      <ProductTable type={type} />
      {/* <DialogProvider>
        <ManagementDialog />
      </DialogProvider> */}
    </div>
  );
};

export default ProductPage;
