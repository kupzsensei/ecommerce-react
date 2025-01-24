import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../API";
import { addtoCartAPI } from "../API/cartAPI";

export default function ProductCard({ data }) {
  const queryClient = useQueryClient();

  const cartMutation = useMutation({
    mutationFn: addtoCartAPI,
    onSuccess: () => {
      console.log("add to cart success");
      queryClient.invalidateQueries(["carts"]);
    },
  });

  const handleAdd = () => {
    const postData = new FormData();
    postData.append("product", data.id);
    postData.append("quantity", "1");
    console.log(data.id, "product data");
    cartMutation.mutate(postData);
  };
  return (
    <div className="flex flex-col p-5 w-[250px] h-[300px] gap-2 border border-gray-400 rounded-lg bg-white">
      <h1 className="font-bold">{data?.name}</h1>
      <img
        src={`${BASE_URL}${data?.img[0]?.img}`}
        alt=""
        className="w-[200px] h-[200px]"
      />
      <div className="flex gap-3 justify-between">
        <h1 className="font-bold">{data?.price}</h1>
        <button onClick={handleAdd} className="font-medium">
          add to cart
        </button>
      </div>
    </div>
  );
}
