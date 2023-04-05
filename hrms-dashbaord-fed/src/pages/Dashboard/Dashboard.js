import React, { useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import TestSidebar from "../../components/Sidebar/testSidebar";
import { RouteStrings } from "../../utils/common";

const Dashboard = () => {
<<<<<<< HEAD
  const [viewSidebar, setViewSidebar] = useState(false);

=======
  const { isAuth } = useSelector((state) => state.UIStore);
>>>>>>> b0116ec3d5799f2d56aa168e32b1b53c6e589cfb

  const items = [
    { name: "home", label: "Home", routeLink: "/testlink" },
    {
      name: "billing",
      label: "Billing",
      items: [
        { name: "statements", label: "Statements", routeLink: "/testlink" },
        { name: "reports", label: "Reports", routeLink: "/testlink" },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      routeLink: "/testlink",
    },
  ];

<<<<<<< HEAD
  return (
    isAuth ?
      <>
        <div className="row g-0">
          <div className="col-md-3 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10">
            <div className="px-3">
              <Outlet />
            </div>
=======
  return isAuth ? (
    <>
      <div className="row g-0">
        <div className="col-md-2">
          {/* <Sidebar /> */}
          <TestSidebar items={items} />
        </div>
        <div className="col-md-10">
          <div className="px-3">
            <Outlet />
>>>>>>> b0116ec3d5799f2d56aa168e32b1b53c6e589cfb
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to={RouteStrings.login} />
  );
};

export default Dashboard;
