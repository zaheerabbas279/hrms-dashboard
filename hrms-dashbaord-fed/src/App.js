import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/auth_screens/signinScreen/SignIn";
import { SignUp } from "./pages/auth_screens/signupScreen/SignUp";
import { ForgotPassword } from "./pages/auth_screens/forgotpassworScreen/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
