/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/register", userData);
        return data;
    } catch (error: any) {
        throw new Error(`Registration failed: ${error.message}`);
    }
};

export const loginUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/login", userData);
        return data;
    } catch (error: any) {
        throw new Error(`Login failed: ${error.message}`);
    }
};
