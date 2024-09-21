import { getProductById } from "@/services/products";
import ProductDetails from "./_components/ProductDetails";

interface ProductId {
    params: {
        productId: string
    }
}

const Page = async ({ params }: ProductId) => {
    const { data: product } = await getProductById({ productId: params.productId });

    return (
        <>
            <ProductDetails product={product} />
        </>
    );
};

export default Page;
