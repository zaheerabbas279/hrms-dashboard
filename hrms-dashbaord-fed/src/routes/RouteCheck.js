import React, { useState } from "react";
import AdminRoutes from "./adminRoutes";
import DashboardRoutes from "./dashboardRoutes";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
const RouteCheck = () => {
  const {isAuth} = useSelector((state) => state.UIStore)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return <>{isAuth ? <DashboardRoutes /> : <AdminRoutes />}</>;
};

export default RouteCheck;
