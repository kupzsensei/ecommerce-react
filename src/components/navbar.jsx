import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { jwtDecode } from "jwt-decode";
import { useQuery } from "@tanstack/react-query";
import { getCartAPI } from "../API/cartAPI";

export default function Navbar({
  setLoginModal,
  loginModal,
  setRegisterModal,
  registerModal,
}) {
  const [cartPopOver, setCartPopOver] = useState(false);
  const [popover, setPopover] = useState(false);
  const token = useContext(AuthContext);
  useEffect(() => {
    // check if the user is logged in
    setPopover(false);
  }, [loginModal]);

  const { data: carts } = useQuery({
    queryFn: getCartAPI,
    queryKey: ["carts"],
  });

  return (
    <nav className="flex gap-5 justify-between px-5 py-3 items-center font-medium">
      <div className="flex items-center gap-2">
        <img
          src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
          alt=""
          className="h-[50px] drop-shadow-md"
        />
        <h1 className="font-bold">Shakra</h1>
      </div>
      <div className="flex gap-5 items-center">
        <div className="relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/275/275790.png"
            alt=""
            className="h-[50px] drop-shadow-md cursor-pointer"
            onClick={() => setCartPopOver(!cartPopOver)}
          />
          {cartPopOver && (
            <div className="shadow-md absolute top-0 left-[0] translate-y-[10%] -translate-x-[90%] bg-white rounded-lg p-3 w-[300px] h-[500px] overflow-y-auto">
              {carts?.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-1 items-center border border-gray-400 p-2"
                >
                  <img src="" alt="" className="w-[50px] h-[50px]" />
                  <div className="flex-1">
                    <h1>title</h1>
                    <h1>Price</h1>
                  </div>
                  <h1>100</h1>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative cursor-pointer">
          {token.authData ? (
            <div className="flex flex-col">
              <h1 className="font-medium">
                {" "}
                {jwtDecode(token.authData).username}
              </h1>
              <p
                className="text-xs text-gray-500"
                onClick={() => {
                  sessionStorage.clear();
                  window.location.reload();
                }}
              >
                logout
              </p>
            </div>
          ) : (
            <img
              src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png"
              alt=""
              className="h-[50px] drop-shadow-md"
              onClick={() => setPopover(!popover)}
            />
          )}
          {popover && (
            <div className="flex flex-col gap-4 font-medium absolute top-0 left-0 p-5 bg-white rounded-lg -translate-x-[90%] translate-y-[40%]">
              <span
                className="hover:text-blue-400"
                onClick={() => setLoginModal(true)}
              >
                Login
              </span>
              <span
                onClick={() => setRegisterModal(true)}
                className="hover:text-blue-400"
              >
                Signup
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
