import { ProductItem } from "@/components/product-item";

// This can be a fetched data too.
import { ProductsData } from "@/constants";

export const ProductList = () => {
    return (
        <div className="my-10 flex flex-wrap items-start justify-around gap-y-8 lg:gap-5 px-4">
            {ProductsData.map((product) => (
                <ProductItem data={product} key={product.id} />
            ))}
        </div>
    );
};
