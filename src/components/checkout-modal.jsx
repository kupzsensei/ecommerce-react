import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CartItem } from "../pages/checkoutpage";
import { getAddressAPI } from "../API/addressAPI";
import { useRef } from "react";
import { createOrderAPI } from "../API/orderAPI";

export default function CheckoutModal({ data, setCheckoutModal }) {
  const queryClient = useQueryClient();
  console.log(data, "checkout modal");
  const addressRef = useRef(null);
  const { data: address } = useQuery({
    queryFn: getAddressAPI,
    queryKey: ["address"],
  });

  const addorderMutation = useMutation({
    mutationFn: createOrderAPI,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["orders"]);
    },
  });

  const handleSubmit = () => {
    const myCart = data.map((obj) => obj.id);
    const postData = {
      note: "wew",
      // user: 1,
      status: 7,
      shipping_address: addressRef.current.value,
      cart: myCart,
    };

    // mutation
    addorderMutation.mutate(postData);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed bg-black/60 top-0 left-0">
      <div className="z-10 w-[600px] h-[600px] p-5 flex flex-col gap-4 bg-white shadow-lg rounded-lg">
        {/* list of selected product */}
        <h1 className="font-bold">CHECKOUT</h1>
        <div className="flex flex-col gap-3 overflow-y-auto h-[400px]">
          {data?.map((obj) => (
            <CartItem key={obj.id} item={obj} product={obj} />
          ))}
        </div>
        <div className="flex justify-between">
          <select name="select" id="" ref={addressRef}>
            <option value="0">Select Address</option>
            {address?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.address}
                {item.contact_number}
              </option>
            ))}
          </select>
          <button onClick={handleSubmit} className="font-bold text-blue-500">
            checkout
          </button>
        </div>
      </div>
      <div
        onClick={() => setCheckoutModal(false)}
        className="fixed h-screen w-screen -z-10 top-0 left-0 "
      ></div>
    </div>
  );
}
