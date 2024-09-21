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

const ProductDetails = ({ product }: { product: Product }) => {

    console.log("p.details",product );

    const {_id, name, productImage, description, category, tags, variants, price, inventory  } = product || "";

    return (
        
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt={name}
              className="lg:w-1/2 w-full lg:h-[400px] h-72 object-cover object-center rounded"
              src={productImage || "https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
              width={500}
              height={500}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:pb-6">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
              
              {/* Tags */}
              <div className="flex flex-wrap mt-4 space-x-2">
                {tags?.map((tag, index) => (
                  <Badge key={index} className="text-xs bg-indigo-100 text-indigo-600">
                    {tag}
                  </Badge>
                ))}
              </div>
  
              <div className="flex items-center mt-4">
                <span className="text-gray-600 ml-3">4 Reviews</span>
                <div className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                  {/* Social icons */}
                  <a className="text-gray-500 hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500 hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
  
              <p className="leading-relaxed mt-4">{description}</p>
  
              {/* Color and Size Selectors */}
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </div>
              </div>
  
              {/* Price and Cart Button */}
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">${price}.00</span>
                <Link href={`/products/${_id}`}>
                  <Button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to Cart
                  </Button>
                </Link>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ProductDetails;
