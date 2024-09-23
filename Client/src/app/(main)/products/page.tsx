/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProducts } from "@/services/products";
import ProductCard from "./_components/ProductCard";

const page = async () => {
    const { data: products } = await getProducts();

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products?.map((product: any) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default page;