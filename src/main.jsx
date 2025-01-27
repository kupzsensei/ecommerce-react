import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./pages/homepage/index.jsx";
import CheckoutPage from "./pages/checkoutpage/index.jsx";
import OrderPage from "./pages/orderPage/index.jsx";
import Preparing from "./pages/orderPage/preparing.jsx";
import ToShip from "./pages/orderPage/toship.jsx";
import Delivery from "./pages/orderPage/delivery.jsx";
import Completed from "./pages/orderPage/completed.jsx";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "orders/",
        element: <OrderPage />,
        children: [
          {
            element: <Preparing />,
            path: "",
          },
          {
            element: <ToShip />,
            path: "toship/",
          },
          {
            element: <Delivery />,
            path: "delivery",
          },
          {
            element: <Completed />,
            path: "completed",
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerConfig} />
    </QueryClientProvider>
  </StrictMode>
);
