"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/shared/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";

type Props = {
  type: "milk" | "meat" | "foodstuffs";
};

type Product = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  primaryPrice: number;
  price: number;
  profit: number;
  count: number;
  type: "milk" | "meat" | "foodstuffs";
};

type ProductResponse = {
  data: Product[];
  total: number;
};

export const ProductTable = ({ type }: Props) => {
  const queryClient = useQueryClient();

  const { data } = useQuery<ProductResponse>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/product");
      return res.json();
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:5000/api/product/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return (
    <div className="rounded-xl border shadow-sm overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center">No</TableHead>
            <TableHead>Ady</TableHead>
            <TableHead>Suraty</TableHead>
            <TableHead>Gelen bahasy</TableHead>
            <TableHead>Satylmaly bahasy</TableHead>
            <TableHead>Peýda</TableHead>
            <TableHead className="text-right">Hereketler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data
            .filter((item) => item.type === type)
            .map((product, index) => (
              <TableRow key={product.id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <PhotoProvider>
                    <PhotoView src={product.image}>
                      <div className="relative w-16 h-16 cursor-pointer hover:scale-105 transition-transform">
                        <Image
                          fill
                          src={product.image}
                          className="object-cover rounded-md"
                          alt="Haryt Suraty"
                          unoptimized
                        />
                      </div>
                    </PhotoView>
                  </PhotoProvider>
                </TableCell>
                <TableCell>{product.primaryPrice} TMT</TableCell>
                <TableCell>{product.price} TMT</TableCell>
                <TableCell>{product.profit} TMT</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => mutate(product.id)}
                    variant="destructive"
                    size="icon"
                    className="hover:scale-105 transition-transform"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
