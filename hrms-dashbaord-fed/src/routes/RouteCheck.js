import React, { useState } from "react";
import AdminRoutes from "./adminRoutes";
import DashboardRoutes from "./dashboardRoutes";
import { useSelector } from "react-redux";
import { Header } from "../components/header/Header";
const RouteCheck = () => {
  const { isAuth } = useSelector((state) => state.UIStore)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return <>
    <Header />
    {isAuth ? <DashboardRoutes /> : <AdminRoutes />}
  </>;
};

export default RouteCheck;
