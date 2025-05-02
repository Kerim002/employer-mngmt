"use client";
import { DialogClose, DialogContent, DialogTitle } from "@/shared/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
import { useCreateEmployer } from "@/entities/workers";
import { useQueryParam } from "@/shared/hook";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(2, { message: "Iň az 2 harp bolmaly" }),
  job: z.string().min(2, { message: "Iň az 2 harp bolmaly" }),
  phone: z.string().min(2, { message: "Iň az 2 harp bolmaly" }),
  image: z.instanceof(File, { message: "Hünärmeniň suraty gerek" }),
  status: z.enum(["active", "inactive"]),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const WorkersDialog = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { getQuery } = useQueryParam();
  const queryClient = useQueryClient();

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
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("state", values.status);
      formData.append("image", values.image);
      formData.append("job", values.job);

      const res = await fetch("http://localhost:5000/api/worker", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server bilen baglanyşykda näsazlyk");

      return await res.json();
    },
    onSuccess: () => {
      closeRef.current?.click();
      queryClient.invalidateQueries({ queryKey: ["worker"] });
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    mutate(values);
  };

  return (
    <DialogContent className="sm:max-w-[500px] p-6 space-y-6">
      <DialogTitle className="text-xl font-semibold text-center">
        Täze Işgäri Goş
      </DialogTitle>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Image Upload */}
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

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ady</FormLabel>
                <FormControl>
                  <Input placeholder="Adyny giriziň" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Job */}
          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wezipesi</FormLabel>
                <FormControl>
                  <Input placeholder="Wezipesini giriziň" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon belgisi</FormLabel>
                <FormControl>
                  <Input placeholder="+993..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Status */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ýagdaýy</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ýagdaýy saýla" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="active">Işjeň</SelectItem>
                    <SelectItem value="inactive">Işjeň däl</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button disabled={isPending} className="w-full" type="submit">
            Ugrat
          </Button>
        </form>
      </Form>

      {/* Hidden close button for programmatic use */}
      <DialogClose ref={closeRef} />
    </DialogContent>
  );
};
