/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import envconfig from "@/app/config/envConfig";
import axiosInstance from "@/lib/axiosInstance";

export const createdProduct = async (formData: FormData): Promise<any> => {
    try {
        const { data } = await axiosInstance.post("/products", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return data;
    } catch (error: any) {
        console.error(error);
        throw new Error(`Product created failed: ${error.message}`);
    }
};


export const getProducts = async () => {
    const res = await fetch(`${envconfig.baseApi}/products`);
    return res.json();
} 

export const getProductById = async ({ productId }: { productId: any }) => {
    const res = await fetch(`${envconfig.baseApi}/products/${productId}`);
    return res.json();
};