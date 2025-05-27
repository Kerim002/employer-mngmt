"use client";
import React from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { useDepartmentEmployersQuery } from "../api/useDepartmentEmployersQuery";
import { DialogContent, DialogDescription } from "@/shared/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
type Props = {
  form: UseFormReturn<DepartmentCreatePayload, any, undefined>;
  submit: SubmitHandler<any>;
};
const DepartmentCreateDialogContent = ({ form, submit }: Props) => {
  const { list } = useDepartmentEmployersQuery();

  return (
    <DialogContent className="p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bolum ady</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="managerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>manager</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="">
                      <SelectValue>
                        {list?.find((item) => item.id === field.value)
                          ?.managerName ?? "select employer"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {list?.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.managerName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="mt-5" type="submit">
            Yasamak
          </Button>
        </form>
      </Form>
      <DialogDescription></DialogDescription>
    </DialogContent>
  );
};

export default DepartmentCreateDialogContent;
