import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCartAPI, removeCartAPI, updateCartAPI } from "../../API/cartAPI";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../API";
import CheckoutModal from "../../components/checkout-modal";

export const CartItem = ({ item, setSelected, product }) => {
  const queryClient = useQueryClient();
  const [quantity, setQuantity] = useState(item?.quantity || 1);
  //   console.log(product, "product itemcard");
  const patchMutation = useMutation({
    mutationFn: updateCartAPI,
    onSettled: (data) => {
      if (data.ok) {
        console.log("updated");
        queryClient.invalidateQueries(["carts"]);
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: removeCartAPI,
    onSettled: (data) => {
      if (data.ok) {
        console.log("delted");
        queryClient.invalidateQueries(["carts"]);
      }
    },
  });

  useEffect(() => {
    // update database
    const postData = new FormData();
    postData.append("id", item.id);
    postData.append("quantity", quantity);
    if (quantity !== 1) {
      patchMutation.mutate(postData);
    }
    if (quantity < 1) {
      deleteMutation.mutate(postData);
    }
  }, [quantity]);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => {
      if (prev <= 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const toggleSelect = () => {
    console.log("selected");
    setSelected((prev) => {
      return prev.map((obj) => {
        if (item.id === obj.id) {
          return { ...obj, selected: !obj.selected };
        }
        return obj;
      });
    });
  };
  return (
    <div className="flex gap-1 items-center border border-gray-400 p-2">
      <img
        src={`${BASE_URL}${item?.product.img[0]?.img}`}
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className="flex-1">
        <h1>{item?.product.name}</h1>
        <h1>{item?.product.price}</h1>
      </div>
      {product ? (
        <div>Quantity: {item?.quantity}</div>
      ) : (
        <div className="flex gap-2 items-center">
          <button onClick={decrement}>-</button>
          <h1>{quantity}</h1>
          <button onClick={increment}>+</button>
        </div>
      )}

      {product ? (
        ""
      ) : (
        <span
          onClick={toggleSelect}
          className="border cursor-pointer border-black p-1 ml-5"
        >
          <h1 className={item?.selected ? "opacity-1" : "opacity-0"}>✔</h1>
        </span>
      )}
    </div>
  );
};

export default function CheckoutPage() {
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [products, setProducts] = useState([]);
  const { data: cartData, isSuccess } = useQuery({
    queryKey: ["carts"],
    queryFn: getCartAPI,
  });

  useEffect(() => {
    if (isSuccess) {
      setProducts(cartData);
    }
  }, [cartData]);

  const handleCheckout = () => {
    setCheckoutModal(true);
  };
  return (
    <section className="flex-1 flex flex-col gap-5 p-5 overflow-y-auto min-h-0 min-w-0">
      <div className="flex justify-between items-center">
        <h1>this is a checkout page</h1>
        <button
          className="bg-blue-500 font-bold text-white shadow-md rounded-lg px-5 py-2"
          onClick={handleCheckout}
        >
          checkout
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {products?.map((item) => (
          <CartItem key={item.id} item={item} setSelected={setProducts} />
        ))}
      </div>
      {/* {checkoutmodal} */}
      {checkoutModal && (
        <CheckoutModal
          data={products?.filter((item) => item.selected == true)}
          setCheckoutModal={setCheckoutModal}
        />
      )}
    </section>
  );
}
