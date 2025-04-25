"use client";
import { useQueryParam } from "@/shared/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
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
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import { useMutation } from "@tanstack/react-query";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  price: z.string().min(1, {
    message: "In az 1 san bolmaly",
  }),
  sellprice: z.string().min(1, { message: "In az 1 san bolmaly" }),
  type: z.enum(["milk", "meat", "foodstuffs"]),
});

type FormSchemaType = z.infer<typeof formSchema>;
export const ProductDialog = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { getQuery } = useQueryParam();
  // const { handleCreateWorker, isPending } = useCreateEmployer();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "0",
      sellprice: "0",
      type: "foodstuffs",
    },
  });
  useEffect(() => {
    return () => {
      form.reset({
        name: "",
        price: "0",
        sellprice: "0",
        type: "meat",
      });
    };
  }, [getQuery("isModal")]);
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: FormSchemaType) => {
      const form = new FormData();
      form.append("name", values.name);
      form.append("price", values.price);
      form.append("primary_price", values.sellprice);
      form.append("type", values.type);
      const res = await fetch("/api/products", { method: "POST", body: form });
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
                <FormLabel>Harydyň ady</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alanan bahasy</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sellprice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Satylmaly bahasy</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Önümin görnüşi</FormLabel>
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
                    <SelectItem value="milk">Süýt önümleri</SelectItem>
                    <SelectItem value="meat">Et önümleri</SelectItem>
                    <SelectItem value="foodstuffs">Azyk harytlary</SelectItem>
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
