import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/auth_screens/signinScreen/SignIn";
import { SignUp } from "./pages/auth_screens/signupScreen/SignUp";
import { ForgotPassword } from "./pages/auth_screens/forgotpassworScreen/ForgotPassword";
import { useState } from "react";
import { Header } from "./components/header/Header";

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <Header isAuth={isLogin} setIsAuth={setIsLogin} />
      <BrowserRouter>
        {
          isLogin ? <>

          </> :
            <Routes>
              <Route index element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
