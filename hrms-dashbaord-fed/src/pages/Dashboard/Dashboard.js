import React from "react";
import CreateButton from "../../components/CreateButton/CreateButton";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const navigatetoCreateSubAdmin = () => {
    navigate("subAdminSignUp");
  };
  const {isAuth} = useSelector(state => state.UIStore)

  return (
    isAuth ? 
      <div className="container dashbaord-body my-4 text-end">
        <CreateButton
          name="Create a new user"
          handleClick={navigatetoCreateSubAdmin}
        />
        <Outlet />
      </div>
    : 
    <Navigate to={"/auth"}/>
  );
};

export default Dashboard;
