/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from "next/link";
import { IProduct } from "@/types";



const ProductCard = ({ product }: { product: IProduct }) => {

    const { _id, name, price, category, productImage, description, tags, variants, inventory } = product || {};

    console.log('product', product);
    return (
        <Link key={_id} href={`/products/${_id}`}>
            <Card className="max-w-sm">
                <CardHeader>
                    <div className="w-full h-48">
                        <Image
                            width={500}
                            height={500}
                            className="w-full h-full object-cover object-center rounded-md"
                            src={productImage?.[0] || '/placeholder.jpg'} 
                            alt={productImage?.[0] ? 'Product Image' : 'Placeholder Image'}
                        />
                    </div>
                    <CardTitle className="mt-4 text-xl font-bold">{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Category: {category}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-600">Tags:</p>
                        <div className="flex flex-wrap space-x-2 mt-1">
                            {tags?.map((tag, index: any) => (
                                <Badge key={index} className="text-xs">{tag}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-600">Variants:</p>
                        <div className="flex flex-wrap space-x-2 mt-1">
                            {variants?.map((variant) => (
                                <Badge key={variant._id} variant="outline" className="text-xs">
                                    {variant.value}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between -center">
                        <p className="text-sm font-medium text-gray-600">Price:</p>
                        <p className="text-lg font-semibold text-green-600">${price}</p>
                    </div>

                    <div className="flex justify-between -center">
                        <p className="text-sm text-gray-600">
                            {inventory?.inStock ? 'In Stock' : 'Out of Stock'}: {inventory?.quantity}
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button variant="default">Add to Cart</Button>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ProductCard;