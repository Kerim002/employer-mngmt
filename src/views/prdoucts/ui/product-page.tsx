"use client";

import { ProductTable } from "@/entities/products/ui/product-table";
import { QueryModalBtn } from "@/features/button";
import { ProductDialog } from "@/widget";
import dynamic from "next/dynamic";
import React from "react";
import "react-photo-view/dist/react-photo-view.css";

const DialogProvider = dynamic(
  () => import("@/widget").then((mod) => mod.DialogProvider),
  { loading: () => <></> }
);

type Props = {
  type: "milk" | "meat" | "foodstuffs";
};

const ProductPage = ({ type }: Props) => {
  return (
    <div className="flex flex-col w-full px-4 md:px-8 py-6 gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Harytlar Sanawy</h1>
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
