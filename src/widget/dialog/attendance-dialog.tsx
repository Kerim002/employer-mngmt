"use client";
import { DialogContent, DialogTitle } from "@/shared/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useDepartmentEmployersQuery } from "@/entities/department";

import { FormDatePicker } from "@/shared/ui/components/form-date-picker";
const formSchema = z.object({
  employerId: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  state: z.enum(["girdi", "çykdy", "gijä galdy"], {
    message: "hokman birini saylamaly",
  }),
  enterAt: z.date(),
});
type FormSchemaType = z.infer<typeof formSchema>;

export const AttendanceDialog = () => {
  const { list } = useDepartmentEmployersQuery();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employerId: "",
      // state: "",
    },
  });

  function onSubmit(values: FormSchemaType) {
    console.log(values);
  }
  return (
    <DialogContent>
      <DialogTitle />
      <Form {...form}>
        {/* <form className="" onSubmit={form.handleSubmit(onSubmit)}> */}
        <FormField
          control={form.control}
          name="employerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Menageri sayla</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value} // Ensure controlled component
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Menageri sayla" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {list?.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.fullName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDatePicker form={form} name="enterAt" />
        {/* </form> */}
      </Form>
    </DialogContent>
  );
};
