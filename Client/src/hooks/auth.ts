/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser, registerUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User created successfully!");
    },
    onError: (error: any) => {
      console.error(error.message);
      toast.error("User registration Failed!");
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successfully!");
    },
    onError: (error: any) => {
      console.error(error.message);
      toast.error("User login Failed!");
    },
  });
};
