import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import CreateSubAdmin from "../../pages/CreateSubAdminSignup/CreateSubAdmin";

const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/subAdminSignUp" element={<CreateSubAdmin />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
