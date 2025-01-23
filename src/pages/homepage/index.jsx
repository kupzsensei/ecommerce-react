import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/product-card";
import { getProductAPI } from "../../API/productAPI";
import ProductModal from "../../components/product-modal";
import { useState } from "react";

export default function Homepage() {
  const [productModal, setProductModal] = useState(false);
  const { data: products } = useQuery({
    queryFn: getProductAPI,
    queryKey: ["products"],
  });
  console.log(products);
  return (
    <div className="p-5 flex-1 min-h-0 min-w-0 flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="font-bold">Products</h1>
        <button
          onClick={() => setProductModal(true)}
          className="font-medium bg-blue-500 text-white rounded-md px-5 py-2"
        >
          Add Product
        </button>
      </div>
      <section className="flex-1 min-h-0 min-w-0 flex flex-wrap gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
      {/* modal */}
      {productModal && <ProductModal setProductModal={setProductModal} />}
    </div>
  );
}
