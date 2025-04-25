import { ProductTable } from "@/entities/products/ui/product-table";
import { QueryModalBtn } from "@/features/button";
import { ProductDialog } from "@/widget";
import dynamic from "next/dynamic";
import React from "react";
const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  {
    loading: () => <></>,
  }
);
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
      <DialogProvider>
        <ProductDialog />
      </DialogProvider>
    </div>
  );
};

export default ProductPage;
