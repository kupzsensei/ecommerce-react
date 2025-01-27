import { useQuery } from "@tanstack/react-query";
import { getOrderAPI } from "../../API/orderAPI";
import StatusCard from "./status-card";

export default function Preparing() {
  const { data, isLoading } = useQuery({
    queryFn: getOrderAPI,
    queryKey: ["preparing"],
  });
  console.log(data);

  const filteredItem = data?.filter((item) => item.status.name == "preparing");

  return (
    <div className="flex flex-col gap-3 overflow-y-auto">
      <h1>Preparing</h1>
      {filteredItem?.map((item) => (
        <StatusCard key={item.id} data={item} />
      ))}
    </div>
  );
}
