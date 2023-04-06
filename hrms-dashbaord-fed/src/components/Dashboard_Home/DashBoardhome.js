import React from "react";
import { useNavigate } from "react-router-dom";
import CreateButton from "../CreateButton/CreateButton";
import "./dashboardhome.scss";

export const DashBoardhome = () => {
  const navigate = useNavigate();
  const navigatetoCreateSubAdmin = () => {
    navigate("subAdminSignUp");
  };

  return (
    <div className="container dashbaord-body my-4">
      {/* <CreateButton
                name="Create a new user"
                handleClick={navigatetoCreateSubAdmin}
            /> */}

      <h4 className="header_color">Dashboard</h4>
    </div>
  );
};
