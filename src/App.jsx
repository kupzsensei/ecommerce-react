import { createContext, useState } from "react";
import Navbar from "./components/navbar";
import LoginModal from "./components/login-modal";
import RegisterModal from "./components/register-modal";
import { Outlet } from "react-router-dom";

export const AuthContext = createContext();

function App() {
  const [authData, setAuthData] = useState(
    sessionStorage.getItem("token") || null
  );
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <main className="w-screen h-screen bg-red-300 flex flex-col">
        <Navbar
          setLoginModal={setLoginModal}
          loginModal={loginModal}
          setRegisterModal={setRegisterModal}
          registerModal={registerModal}
        />

        <Outlet />

        {/* login modal */}
        {loginModal && (
          <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
        )}
        {/* register modal */}
        {registerModal && (
          <RegisterModal
            setRegisterModal={setRegisterModal}
            registerModal={registerModal}
          />
        )}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
