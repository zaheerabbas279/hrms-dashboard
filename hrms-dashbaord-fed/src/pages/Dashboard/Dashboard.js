import React, { useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { RouteStrings } from "../../utils/common";

const Dashboard = () => {
  const [viewSidebar, setViewSidebar] = useState(false);


  const { isAuth } = useSelector(state => state.UIStore)

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
          </div>
        </div>

      </>
      :
      <Navigate to={RouteStrings.login} />
  );
};

export default Dashboard;
