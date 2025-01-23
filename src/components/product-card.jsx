import { BASE_URL } from "../API";

export default function ProductCard({ data }) {
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
        <button className="font-medium">add to cart</button>
      </div>
    </div>
  );
}
