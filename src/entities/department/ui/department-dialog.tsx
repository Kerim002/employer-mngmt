"use client";
import { Dialog, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import React, { ReactNode, useEffect } from "react";
import DepartmentCreateDialogContent from "./department-create-dialog-content";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {
  children: ReactNode;
  id?: string;
};
const DepartmentDialog = ({ children, id }: Props) => {
  const form = useForm<DepartmentCreatePayload>({
    defaultValues: { managerId: "", name: "" },
  });
  const submit: SubmitHandler<DepartmentCreatePayload> = (data) =>
    console.log(data);
  return (
    <Dialog
      onOpenChange={(open) => {
        !open && form.reset({ managerId: "", name: "" });
      }}
    >
      <DialogTitle hidden></DialogTitle>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DepartmentCreateDialogContent form={form} submit={submit} />
    </Dialog>
  );
};

export default DepartmentDialog;
