"use client";
import React from "react";
import {
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  Table,
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
  const queryCLient = useQueryClient();
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
      queryCLient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Harydyn ady</TableHead>
          <TableHead>Harydyn suraty</TableHead>
          <TableHead>Gelen bahasy</TableHead>
          <TableHead>Satylmaly bahasy</TableHead>
          <TableHead>Peýda</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.data
          .filter((item) => item.type === type)
          .map((product, index) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                <PhotoProvider
                  bannerVisible={false}
                  maskOpacity={0.5}
                  speed={() => 800}
                  easing={(type) =>
                    type === 2
                      ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                      : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }
                  photoWrapClassName="min-w-96 min-h-96 flex justify-center items-center"
                >
                  <PhotoView src={product.image}>
                    <div className="relative w-14  h-14">
                      <Image
                        fill
                        className="object-cover rounded-md"
                        unoptimized
                        alt=""
                        src={product.image}
                      />
                    </div>
                  </PhotoView>
                </PhotoProvider>
              </TableCell>
              <TableCell>{product.primaryPrice}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.profit}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  onClick={() => mutate(product.id)}
                  variant="destructive"
                  size="icon"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
