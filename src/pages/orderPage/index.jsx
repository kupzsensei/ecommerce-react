import { NavLink, Outlet } from "react-router-dom";

export default function OrderPage() {
  return (
    <main className="flex-1 min-h-0 min-w-0 flex flex-col p-5 gap-5">
      <h1 className="font-bold text-2xl">this is order page</h1>
      <nav className="flex gap-3 items-center font-bold text-gray-900">
        <NavLink to={"/orders"}>PREPARING</NavLink>
        <NavLink to={"/orders/toship"}>TO SHIP</NavLink>
        <NavLink to={"/orders/delivery"}>OUT FOR DELIVERY</NavLink>
        <NavLink to={"/orders/completed"}>COMPLETED</NavLink>
      </nav>
      <section className="flex-1 min-h-0 min-w-0 flex flex-col">
        <Outlet />
      </section>
    </main>
  );
}
