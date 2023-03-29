import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import CreateSubAdmin from "../../pages/CreateSubAdminSignup/CreateSubAdmin";
import { CompanyDetails } from "../../pages/CompanyDetails/CompanyDetails";
import { Header } from "../../components/Header/Header";

const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="subAdminSignUp" element={<CreateSubAdmin />} />
          <Route path="companydetails" element={<CompanyDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRoutes;
