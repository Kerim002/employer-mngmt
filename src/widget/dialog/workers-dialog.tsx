"use client";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/shared/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import { useCreateEmployer } from "@/entities/workers";
import { $Enums } from "@prisma/client";
import { useQueryParam } from "@/shared/hook";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  job: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  phone: z.string().min(2, { message: "In az 2 harp bolmaly" }),
  status: z.enum(["active", "inactive"]),
});

type FormSchemaType = z.infer<typeof formSchema>;
type FormErrorType = "name" | "job" | "phone" | "status";
export const WorkersDialog = () => {
  const { getQuery } = useQueryParam();
  const { handleCreateWorker, isPending } = useCreateEmployer();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      job: "",
      phone: "",
      status: "inactive",
    },
  });
  useEffect(() => {
    return () => {
      form.reset({
        name: "",
        job: "",
        phone: "",
        status: "inactive",
      });
    };
  }, [getQuery("isModal")]);
  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    try {
      formSchema.parse(values);
      handleCreateWorker({
        fullName: values.name,
        job: values.job,
        phone: values.phone,
        state: values.status as $Enums.State,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          const errorPath = err.path[0] as FormErrorType;
          form.setError(errorPath, { message: err.message });
        });
      } else {
        console.error("Неизвестная ошибка:", error);
      }
    }
  };
  return (
    <DialogContent>
      <DialogTitle hidden />
      <DialogDescription hidden></DialogDescription>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Isgarin ady</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Isin gornusi</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon belgisi</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status sayla</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Status sayla" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="active">Isjen</SelectItem>
                    <SelectItem value="inactive">Isjen dal</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} className="w-full" type="submit">
            Submit
          </Button>
        </form>
        <FormMessage />
      </Form>
    </DialogContent>
  );
};
