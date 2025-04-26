import { useMutation } from "@tanstack/react-query";
import { productApi } from "./api";

export const useUploadProduct = () => {
  const { mutate } = useMutation({
    mutationFn: productApi.uploadProduct,
  });

  return { uploadProduct: mutate };
};
