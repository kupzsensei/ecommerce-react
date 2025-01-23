import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { createProductAPI } from "../API/productAPI";

export default function ProductModal({ setProductModal }) {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const imgRef = useRef(null);

  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: createProductAPI,
    onSuccess: (data) => {
      console.log(data);
      if (data.ok) {
        setProductModal(false);
        queryClient.invalidateQueries(["products"]);
      }
    },
  });
  const handleSubmit = () => {
    const postData = new FormData();
    postData.append("name", nameRef.current.value);
    postData.append("price", priceRef.current.value);
    postData.append("img", imgRef.current.files[0]);

    productMutation.mutate(postData);
  };
  return (
    <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black/60">
      <div className="flex flex-col bg-white p-5 rounded-lg gap-3">
        <input
          type="text"
          placeholder="Product name"
          className="px-3 py-1 rounded-md bg-gray-300"
          ref={nameRef}
        />
        <input
          type="file"
          placeholder="Product img"
          className="px-3 py-1 rounded-md bg-gray-300"
          ref={imgRef}
        />
        <input
          type="price"
          placeholder="Product price"
          className="px-3 py-1 rounded-md bg-gray-300"
          ref={priceRef}
        />
        <button onClick={handleSubmit} className="text-blue-600 font-bold">
          submit
        </button>
        <button
          onClick={() => setProductModal(false)}
          className="text-red-600 font-bold"
        >
          close
        </button>
      </div>
    </div>
  );
}
