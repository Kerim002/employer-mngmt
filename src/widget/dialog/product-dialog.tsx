"use client";
import { useQueryParam } from "@/shared/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "In az 2 harp bolmaly.",
  }),
  price: z.string().min(1, {
    message: "In az 1 san bolmaly",
  }),
  primary_price: z.string().min(1, { message: "In az 1 san bolmaly" }),
  count: z.string().min(1, { message: "In az 1 san bolmaly" }),
  image: z.instanceof(File, { message: "Harydyn suraty." }),
  type: z.enum(["milk", "meat", "foodstuffs"]),
});

type FormSchemaType = z.infer<typeof formSchema>;
export const ProductDialog = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { getQuery } = useQueryParam();
  const queryClient = useQueryClient();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "0",
      primary_price: "0",
      type: "foodstuffs",
      count: "0",
    },
  });
  const [preview, setPreview] = useState<string | null>(null);
  const imageFile = form.watch("image") as File;

  useEffect(() => {
    if (imageFile instanceof File) {
      const objectUrl = URL.createObjectURL(imageFile);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); // Освобождаем URL при изменении
    } else {
      setPreview(null);
    }
  }, [imageFile]);
  useEffect(() => {
    return () => {
      form.reset({
        name: "",
        price: "0",
        primary_price: "0",
        count: "0",
        type: "meat",
      });
    };
  }, [getQuery("isModal")]);
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: FormSchemaType) => {
      const formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("price", values.price);
      formdata.append("primary_price", values.primary_price);
      formdata.append("count", values.count);
      formdata.append("type", values.type);
      formdata.append("image", values.image);
      const res = await fetch("http://localhost:5000/api/product", {
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
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
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
            name="primary_price"
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
            name="price"
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
            name="count"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Möçberi</FormLabel>
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
            Döretmek
          </Button>
        </form>
        <FormMessage />
      </Form>
      <DialogClose ref={closeRef} />
    </DialogContent>
  );
};
