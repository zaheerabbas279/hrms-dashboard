import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateSubAdmin from "../pages/CreateSubAdminSignup/CreateSubAdmin";
import { CompanyDetails } from "../pages/CompanyDetails/CompanyDetails";
import { SignIn } from "../pages/Auth/SignIn/SignIn";
import { SignUp } from "../pages/Auth/SignUp/SignUp";
import { ForgotPassword } from "../pages/Auth/ForgotPassword/ForgotPassword";
import { RouteStrings } from "../utils/common";
import { Attendance } from "../components/Attendance/Attendance";
import { DashBoardhome } from "../components/Dashboard_Home/DashBoardhome";

const RouteCheck = () => {
  // const { isAuth } = useSelector((state) => state.UIStore);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // return <>{isAuth ? <DashboardRoutes /> : <AdminRoutes />}</>;

  return (
    <Routes>
      {/* auth routes */}
      <Route
        path={RouteStrings.login}
        element={
          <>
            <Outlet />
          </>
        }
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
        <Route
          path={RouteStrings.attendance}
          element={<Attendance />}
        />
      </Route>
    </Routes>
  );
};

export default RouteCheck;
