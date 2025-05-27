"use client";
import {
  DialogClose,
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
import React, { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
import {
  useCreateDepartmentMutation,
  useDepartmentEmployersQuery,
  useDepartmentIdQuery,
} from "@/entities/department";
import { Button } from "@/shared/ui/button";
import { useQueryParam } from "@/shared/hook";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  manager: z.string().min(2, {
    message: "Birin sayla",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;
type FormErrorType = "name" | "manager";

export const DepartmentDialog = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { getQuery } = useQueryParam();
  const departmentId = getQuery("id");
  const { list } = useDepartmentEmployersQuery();
  const { handleCreateDepartment, isPending } = useCreateDepartmentMutation();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      manager: "",
    },
  });

  const { department } = useDepartmentIdQuery(departmentId);

  useEffect(() => {
    if (department) {
      form.reset({
        name: department.name || "",
        manager: department.manager?.id || "",
      });
    }
  }, [department, form]);

  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    try {
      formSchema.parse(values);
      handleCreateDepartment(
        { managerId: values.manager, name: values.name },
        {
          onSuccess: () => {
            closeRef.current?.click();
          },
        }
      );
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
      <DialogTitle>Department gosmak</DialogTitle>
      <DialogDescription hidden></DialogDescription>
      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department ady</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="manager"
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
          <Button disabled={isPending} type="submit">
            Döretmek
          </Button>
        </form>
      </Form>
      <DialogClose ref={closeRef} />
    </DialogContent>
  );
};
