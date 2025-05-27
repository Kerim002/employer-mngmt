"use client";
import { useQueryParam } from "@/shared/hook";
import { Dialog } from "@/shared/ui/dialog";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const DialogProvider = ({ children }: Props) => {
  const { getQuery, deleteQuery } = useQueryParam();

  return (
    <Dialog
      onOpenChange={() => deleteQuery(["isModal", "id"])}
      open={getQuery("isModal") ? true : false}
      modal={false}
    >
      {children}
    </Dialog>
  );
};
