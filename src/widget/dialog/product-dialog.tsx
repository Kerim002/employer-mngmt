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
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "In az 2 harp bolmaly",
  }),
  price: z.string().min(1, {
    message: "In az 1 san bolmaly",
  }),
  sellprice: z.string().min(1, { message: "In az 1 san bolmaly" }),
  type: z.enum(["milk", "meat", "foodstuffs"]),
  image: z
    .instanceof(File, { message: "Файл должен быть изображением" })

    .refine((file) => file && file?.size < 5 * 1024 * 1024, {
      message: "image-size-limit",
    })
    .refine(
      (file) =>
        file && ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      {
        message: "allowed-image-format",
      }
    )
    .optional(),
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
      form.append("image", values.image as File);
      const res = await fetch("/api/product", { method: "POST", body: form });
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
            name={"image"}
            render={({ field }) => (
              <FormItem>
                <div className="w-full flex justify-center">
                  <FormLabel
                    className="w-fit flex justify-center"
                    htmlFor={field.name}
                  >
                    <div className="w-20 h-20 rounded-2xl dark:bg-dark-2 bg-gray-200 flex overflow-hidden">
                      {preview ? (
                        <Image
                          src={preview}
                          width={80}
                          height={80}
                          alt="Preview"
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <Image src={""} alt="" width={80} height={80} />
                      )}
                    </div>
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    hidden
                    className="hidden"
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                    id={field.name}
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
