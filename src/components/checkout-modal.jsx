import { CartItem } from "../pages/checkoutpage";

export default function CheckoutModal({ data, setCheckoutModal }) {
  console.log(data, "checkout modal");
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed bg-black/60 top-0 left-0">
      <div className="z-10 w-[600px] h-[600px] p-5 flex flex-col gap-4 bg-white shadow-lg rounded-lg">
        {/* list of selected product */}
        <h1 className="font-bold">CHECKOUT</h1>
        <div className="flex flex-col gap-3 overflow-y-auto h-[400px]">
          {data?.map((obj) => (
            <CartItem key={obj.id} item={obj} />
          ))}
        </div>
      </div>
      <div
        onClick={() => setCheckoutModal(false)}
        className="fixed h-screen w-screen -z-10 top-0 left-0 "
      ></div>
    </div>
  );
}
