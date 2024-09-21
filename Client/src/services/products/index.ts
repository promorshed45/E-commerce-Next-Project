/* eslint-disable @typescript-eslint/no-explicit-any */
import envconfig from "@/app/config/envConfig";

export const getProducts = async () => {
    const res = await fetch(`${envconfig.baseApi}/products`);

    return res.json();
} 

export const getProductById = async ({ productId }: { productId: any }) => {
    const res = await fetch(`${envconfig.baseApi}/products/${productId}`);
    return res.json();
};