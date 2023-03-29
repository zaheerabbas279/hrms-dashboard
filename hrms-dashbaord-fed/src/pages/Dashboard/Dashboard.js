import React from "react";
import CreateButton from "../../components/CreateButton/CreateButton";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";

const Dashboard = () => {
  const navigate = useNavigate();
  const navigatetoCreateSubAdmin = () => {
    navigate("/subAdminSignUp");
  };
  return (
    <>
      <div className="container dashbaord-body my-4 text-end">
        <CreateButton
          name="Create a new user"
          handleClick={navigatetoCreateSubAdmin}
        />
      </div>
    </>
  );
};

export default Dashboard;
