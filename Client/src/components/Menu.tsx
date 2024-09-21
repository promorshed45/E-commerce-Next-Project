import Link from 'next/link';
import React from 'react';
import { LuHome, LuShoppingBag } from 'react-icons/lu';
import { MdOutlineEventNote } from "react-icons/md";


const Menu = () => {
    return (
        <nav aria-label="breadcrumb" className="w-full px-10 md:px-20 py-5  shadow-sm dark:bg-gray-800 dark:text-gray-100">
            <ol className="flex h-8 space-x-2">
                <li className="flex items-center">
                    <Link href="/" title="Back to homepage" className="hover:underline">
                        <LuHome className='text-2xl' />
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <Link href="/" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600">Home</Link>
                </li>
                <li className="flex items-center space-x-2">
                    <LuShoppingBag className='text-2xl' />

                    <Link href="/products" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600">Product</Link>
                </li>
                <li className="flex items-center space-x-2">
                    <MdOutlineEventNote className='text-2xl' />
                    <Link href="/category" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600 cursor-default"> About Us</Link>
                </li> 
                <li className="flex items-center space-x-2">
                    <MdOutlineEventNote className='text-2xl' />
                    <Link href="/category" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600 cursor-default"> Contact</Link>
                </li>
                <li className="flex items-center space-x-2">
                    <MdOutlineEventNote className='text-2xl' />
                    <Link href="/login" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600 cursor-default"> Login</Link>
                </li>
            </ol>
        </nav>
    );
};

export default Menu;