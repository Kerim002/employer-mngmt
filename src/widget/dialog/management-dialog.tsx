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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import {
  useWorkerDepartmentListQuery,
  useWorkerJoinDepartmentMutation,
} from "@/entities/workers";
import {
  useDepartmentEmployersQuery,
  useDepartmentWorkerListQuery,
} from "@/entities/department";
import { useQueryParam } from "@/shared/hook";
import { useEmployerIdQuery } from "@/entities/users";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  departmentId: z.string().min(2, {
    message: "Birin sayla",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;
type FormErrorType = "name" | "departmentId";
export const ManagementDialog = () => {
  const { getQuery } = useQueryParam();
  const { workerList } = useWorkerDepartmentListQuery();
  const { departmentList } = useDepartmentWorkerListQuery();
  const { worker } = useEmployerIdQuery(getQuery("id"));
  const closeRef = useRef<HTMLButtonElement>(null);
  const { handleWorkerJoinDepartment, isPending } =
    useWorkerJoinDepartmentMutation();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      departmentId: "",
    },
  });

  useEffect(() => {
    form.reset({
      name: worker?.id,
      departmentId: worker?.departmentId ?? "",
    });
  }, [worker, departmentList, workerList]);
  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    try {
      formSchema.parse(values);
      handleWorkerJoinDepartment(
        {
          departmentId: values.departmentId,
          id: values.name,
        },
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
      <DialogTitle hidden />
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
                <FormLabel>Isgari sayla</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Isgari sayla" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {workerList?.map((item) => (
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
          <FormField
            control={form.control}
            name="departmentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bolumi sayla</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bolumi sayla" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {departmentList?.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
      <DialogClose ref={closeRef} />
    </DialogContent>
  );
};
