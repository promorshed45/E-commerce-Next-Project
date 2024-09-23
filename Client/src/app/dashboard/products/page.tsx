'use client';

import ImageUpload from "@/components/ImageUpload";
import ReusableInput from "@/components/ReusableInput";
import ReusableTextarea from "@/components/ReusableTextarea";
import { Button } from "@/components/ui/button";
import { useCreatedProduct } from "@/hooks/products";
import { useState } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
    const methods = useForm();
    const { mutate: handleCreateProduct } = useCreatedProduct();
    const { handleSubmit } = methods;

    const [imageFiles, setImageFiles] = useState<File[]>([]);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        console.log('data', data);

        const formData = new FormData();

        const productData = {
            ...data,
            price: Number(data.price),
            inventory: { quantity: Number(data?.quantity) },
            images: Array.isArray(data.images) ? data.images : String(data.images)
        };

        formData.append("data", JSON.stringify(productData));

        for (const images of imageFiles) {
            formData.append("productImages", images);
        }

        // Debugging logs
        console.log('Form data:', formData.get("data"));
        console.log('Image files:', imageFiles);

        // Call the mutation function
        handleCreateProduct(formData);
    };

    return (
        <FormProvider {...methods}>
            <div className="flex justify-center flex-col mx-auto shadow-sm bg-white w-1/2 p-10">
                <div><h1 className="text-xl font-bold pb-5">Add New Product</h1></div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <ReusableInput name="name" label="Name" placeholder="Enter product name" />
                        <ReusableInput name="price" label="Price" placeholder="Enter price" />
                        <ReusableInput name="category" label="Category" placeholder="Enter category" />
                        <ReusableInput name="quantity" label="Quantity" placeholder="Enter quantity" />
                    </div>
                    <ReusableTextarea rows={3} name="description" label="Description" placeholder="Enter description" />
                    <ImageUpload label="Upload Product Images" name="images" setImageFiles={setImageFiles} />
                    <div>
                        <Button type="submit">Add Product</Button>
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default Page;
