import React from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const Dashboard = () => {

  const { isAuth } = useSelector(state => state.UIStore)

  return (
    isAuth ?
      <>
        <div className="row g-0">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">

            <Outlet />

          </div>
        </div>

      </>
      :
      <Navigate to={"/auth"} />
  );
};

export default Dashboard;
