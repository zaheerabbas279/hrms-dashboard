import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import CreateSubAdmin from "../../pages/CreateSubAdminSignup/CreateSubAdmin";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Attendance } from "../../components/Attendance/Attendance";

const DashboardRoutes = () => {
  return (
    <div className="row no-gutters">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subAdminSignUp" element={<CreateSubAdmin />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </div>

    </div>
  );
};

export default DashboardRoutes;
