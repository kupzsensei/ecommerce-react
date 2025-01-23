import { useContext, useRef } from "react";
import { loginAPI } from "../API/authAPI";
import { AuthContext } from "../App";

export default function LoginModal({ setLoginModal }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const authdata = useContext(AuthContext);
  //   console.log(authdata.authData);

  const handleLogin = () => {
    const postData = new FormData();
    postData.append("username", usernameRef.current.value);
    postData.append("password", passwordRef.current.value);
    console.log(usernameRef.current.value, passwordRef.current.value);

    loginAPI(postData).then((res) => {
      if (res.access) {
        console.log("login Success!");
        setLoginModal(false);
        authdata.setAuthData(res.access);
        sessionStorage.setItem("token", res.access);
      } else {
        alert(res.detail);
      }
    });
  };
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center bg-black/50 w-screen h-screen">
      <div
        onClick={() => setLoginModal(false)}
        className="absolute w-screen h-screen top-0 left-0"
      ></div>
      <div className="rounded-lg p-5 flex flex-col gap-3 bg-gray-200 z-10">
        <h1 className="text-xl font-bold">Login</h1>
        <input
          type="text"
          placeholder="Username"
          ref={usernameRef}
          className="px-3 py-1 rounded-md border border-black"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="px-3 py-1 rounded-md border border-black"
        />
        <button
          onClick={handleLogin}
          className="px-5 py-2 rounded-md bg-blue-500 font-medium text-white"
        >
          login
        </button>
      </div>
    </div>
  );
}
