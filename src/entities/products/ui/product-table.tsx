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
import { QueryEditBtn } from "@/features/button";
type Props = {
  type: "milk" | "meat" | "foodstuffs";
};
import "react-photo-view/dist/react-photo-view.css";
export const ProductTable = ({ type }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Harydyn ady</TableHead>
          <TableHead>Gelen bahasy</TableHead>
          <TableHead>Satylmaly bahasy</TableHead>
          <TableHead>Peýda</TableHead>
          <TableHead className="text-right">Goşmaçalar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array.from({ length: 20 })]?.map((_, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index}</TableCell>
            <TableCell>Täze aý süýt</TableCell>
            <TableCell>10</TableCell>
            <TableCell>15</TableCell>
            <TableCell>5</TableCell>

            <TableCell className="text-right space-x-2">
              <QueryEditBtn
                queries={[
                  { key: "isModal", value: "true" },
                  { key: "id", value: "id" },
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
