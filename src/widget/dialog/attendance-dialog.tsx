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
import { Button } from "@/shared/ui/button";
import { useAttendanceCreateMutation } from "@/entities/attendance";
const formSchema = z.object({
  employerId: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  state: z.enum(["geldi", "gelmedi", "gijä galdy"], {
    message: "hokman birini saylamaly",
  }),
  enterAt: z.date(),
  exitAt: z.date(),
});
type FormSchemaType = z.infer<typeof formSchema>;

export const AttendanceDialog = () => {
  const { list } = useDepartmentEmployersQuery();
  const { handleCreateAttendance } = useAttendanceCreateMutation();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employerId: "",
    },
  });

  function onSubmit(values: FormSchemaType) {
    handleCreateAttendance(values);
  }
  return (
    <DialogContent>
      <DialogTitle />
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
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
          <p className="text-sm">Giren wagty</p>
          <FormDatePicker form={form} name="enterAt" />
          <p className="text-sm">Cykan wagty</p>

          <FormDatePicker form={form} name="exitAt" />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Statusy</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value} // Ensure controlled component
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Statusy" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="geldi">Geldi</SelectItem>
                    <SelectItem value="gelmedi">Gelmedi</SelectItem>
                    <SelectItem value="gijä galdy">Gijä galdy</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-2" type="submit">
            Döretmek
          </Button>
        </form>
      </Form>
    </DialogContent>
  );
};
