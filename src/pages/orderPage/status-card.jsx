import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../API";

export default function StatusCard({ data }) {
  return (
    <div className="flex flex-col gap-3 p-5 border border-white  ">
      <div className="flex flex-col gap-1 ">
        {data?.cart.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <img
              className="w-[50px] h-50px"
              src={`${BASE_URL}${item?.product?.img[0]?.img}`}
              alt=""
            />
            <div>
              <h1 className="font-bold text-nowrap">{item?.product?.name}</h1>
            </div>
          </div>
        ))}
      </div>
      <h1 className="font-bold text-white">{data?.status?.name}</h1>
      {jwtDecode(sessionStorage.getItem("token")).id == 1 && (
        <button className="text-blue-700 font-bold w-max">
          order received
        </button>
      )}
    </div>
  );
}
