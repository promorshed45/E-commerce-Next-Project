/* eslint-disable @typescript-eslint/no-explicit-any */
import { createdProduct } from "@/services/products";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreatedProduct = () => {
    return useMutation<any, Error, FormData>({
      mutationKey: ["CREATE_PRODUCT"],
      mutationFn: async (data) => await createdProduct(data),
      onSuccess: () => {
        toast.success("Product created successfully!");
      },
      onError: (error: any) => {
        console.error(error);
        toast.error("Product created Failed!");
      },
    });
  };