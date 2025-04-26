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
import { Button } from "@/shared/ui/button";
import { useCreateEmployer } from "@/entities/workers";
import { $Enums } from "@prisma/client";
import { useQueryParam } from "@/shared/hook";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  job: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  phone: z.string().min(2, { message: "In az 2 harp bolmaly" }),
  image: z.instanceof(File, { message: "Harydyn suraty." }),
  status: z.enum(["active", "inactive"]),
});

type FormSchemaType = z.infer<typeof formSchema>;
type FormErrorType = "name" | "job" | "phone" | "status";
export const WorkersDialog = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
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

  const { mutate } = useMutation({
    mutationFn: async (values: FormSchemaType) => {
      const formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("phone", values.phone);
      formdata.append("state", values.status);
      formdata.append("image", values.image);
      formdata.append("job", values.job);
      const res = await fetch("http://localhost:5000/api/worker", {
        method: "POST",
        body: formdata,
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
    onSuccess: () => {
      closeRef.current?.click();
    },
  });
  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    mutate(values);
    // try {
    //   formSchema.parse(values);
    //   handleCreateWorker(
    //     {
    //       fullName: values.name,
    //       job: values.job,
    //       phone: values.phone,
    //       state: values.status as $Enums.State,
    //     },
    //     {
    //       onSuccess: () => {
    //         closeRef.current?.click();
    //       },
    //     }
    //   );
    // } catch (error) {
    //   if (error instanceof z.ZodError) {
    //     error.errors.forEach((err) => {
    //       const errorPath = err.path[0] as FormErrorType;
    //       form.setError(errorPath, { message: err.message });
    //     });
    //   } else {
    //     console.error("Неизвестная ошибка:", error);
    //   }
    // }
  };
  return (
    <DialogContent>
      <DialogTitle hidden />
      <DialogDescription hidden></DialogDescription>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Suraty</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      form.setValue("image", file as File, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
      <DialogClose ref={closeRef} />
    </DialogContent>
  );
};
