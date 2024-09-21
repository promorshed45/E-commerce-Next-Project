"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from "next/link";

interface Product {
    _id: string;
    productImage: string;
    name: string;
    description: string;
    category: string;
    tags: string[];
    variants: { _id: string; value: string }[];
    price: number;
    inventory: { inStock: boolean; quantity: number };
}

const ProductCard = ({ product }: {product: Product}) => {
    return (
        <Link href={`/products/${product?._id}`}>
            <Card className="max-w-sm">
                <CardHeader>
                    <Image
                        width={500}
                        height={500}
                        className="w-full h-62 object-cover rounded-md"
                        src={product?.productImage}
                        alt={product.name}
                    />
                    <CardTitle className="mt-4 text-xl font-bold">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Category: {product.category}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-600">Tags:</p>
                        <div className="flex flex-wrap space-x-2 mt-1">
                            {product?.tags?.map((tag, index) => (
                                <Badge key={index} className="text-xs">{tag}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-600">Variants:</p>
                        <div className="flex flex-wrap space-x-2 mt-1">
                            {product?.variants?.map((variant) => (
                                <Badge key={variant._id} variant="outline" className="text-xs">
                                    {variant.value}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-sm font-medium text-gray-600">Price:</p>
                        <p className="text-lg font-semibold text-green-600">${product.price}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                            {product?.inventory?.inStock ? 'In Stock' : 'Out of Stock'}: {product?.inventory?.quantity}
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