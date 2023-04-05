import React from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import TestSidebar from "../../components/Sidebar/testSidebar";
import { RouteStrings } from "../../utils/common";

const Dashboard = () => {
  const { isAuth } = useSelector((state) => state.UIStore);

  const items = [
    { name: "home", label: "Home" },
    {
      name: "billing",
      label: "Billing",
      items: [
        { name: "statements", label: "Statements" },
        { name: "reports", label: "Reports" },
      ],
    },
    {
      name: "settings",
      label: "Settings",
    },
  ];

  return isAuth ? (
    <>
      <div className="row g-0">
        <div className="col-md-2">
          <Sidebar />
          {/* <TestSidebar items={items} /> */}
        </div>
        <div className="col-md-10">
          <div className="px-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to={RouteStrings.login} />
  );
};

export default Dashboard;
