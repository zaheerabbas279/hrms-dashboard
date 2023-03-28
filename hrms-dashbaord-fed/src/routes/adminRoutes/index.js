import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "../../pages/Auth/SignIn/SignIn";
import { SignUp } from "../../pages/Auth/SignUp/SignUp";
import { Header } from "../../components/Header/Header";
import { ForgotPassword } from "../../pages/Auth/ForgotPassword/ForgotPassword";

const AdminRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
