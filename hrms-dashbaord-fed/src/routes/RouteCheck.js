import React, { useState } from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateSubAdmin from "../pages/CreateSubAdminSignup/CreateSubAdmin";
import { CompanyDetails } from "../pages/CompanyDetails/CompanyDetails";
import { SignIn } from "../pages/Auth/SignIn/SignIn";
import { SignUp } from "../pages/Auth/SignUp/SignUp";
import { ForgotPassword } from "../pages/Auth/ForgotPassword/ForgotPassword";
import { RouteStrings } from "../utils/common";
import { Leaves, leaves } from "../pages/Leaves/Leaves";
import { DashBoardhome } from "../components/Dashboard_Home/DashBoardhome";
import { SettingsPage } from "../pages/Settings/SettingsPage";
import { CreateUser } from "../pages/CreateUser/CreateUser";
import { CreateRole } from "../pages/CreateRole/CreateRole";
import { Payslips } from "../pages/Payslips/Payslips";
import { Fields } from "../pages/Fields/Fields";
import { LeavesTable } from "../pages/LeavesTable/LeavesTable";
import { EmployeeApplyLeave } from "../pages/EmployeeApplyLeave/EmployeeApplyLeave";
import { NotFoundScreen } from "../pages/404/404";
import { IsAuthcondition } from "./IsAuthcondition";

const RouteCheck = () => {
  const { isAuth } = useSelector((state) => state.UIStore);

  return (
    <Routes>
      {/* auth routes */}
      <Route
        path={RouteStrings.login}
        element={<IsAuthcondition />}
      >
        <Route index element={<SignIn />} />
        <Route path={RouteStrings.signup} element={<SignUp />} />
        <Route
          path={RouteStrings.forgotpassword}
          element={<ForgotPassword />}
        />
      </Route>
      {/* dashboard */}
      <Route path={RouteStrings.dashboard} element={<Dashboard />}>
        <Route index element={<DashBoardhome />} />
        <Route
          path={RouteStrings.subAdminSignUp}
          element={<CreateSubAdmin />}
        />
        <Route
          path={RouteStrings.companydetails}
          element={<CompanyDetails />}
        />
        <Route path={RouteStrings.leaves} element={<Leaves />} />
        <Route path={RouteStrings.leavestable} element={<LeavesTable />} />
        <Route
          path={RouteStrings.employeeApplyLeave}
          element={<EmployeeApplyLeave />}
        />
        <Route path={RouteStrings.settings} element={<SettingsPage />} />
        <Route path={RouteStrings.createEmployee} element={<CreateUser />} />
        <Route path={RouteStrings.createrole} element={<CreateRole />} />
        <Route path={RouteStrings.payslips} element={<Payslips />} />
        <Route path={RouteStrings.fields} element={<Fields />} />
        <Route path={RouteStrings[404]} element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
};

export default RouteCheck;
