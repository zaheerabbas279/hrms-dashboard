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
      <h4 className="header_color">Dashboard</h4>

      <div className="my-3">
        <div className="row">
          <div className="col-md-3">
            {/* <h5>Organization Chart</h5> */}
            <div className="card p-3">
              <h6>Organization Chart</h6>

              <div className="w-100 text-end">
                <p className="mb-0">
                  <strong>90</strong>
                </p>
                <p className="mb-0">Peers</p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3">
            <div className="card p-3">
              <h6>Payroll</h6>
            </div>
          </div> */}
          <div className="col-md-3">
            <div className="card p-3">
              <h6>Projects</h6>
              <div className="w-100 text-end">
                <p className="mb-0">
                  <strong>0</strong>
                </p>
                <p className="mb-0">Projects</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3">
              <h6>Leaves Count</h6>
              <div className="w-100 text-end">
                <p className="mb-0">
                  <strong>0</strong>
                </p>
                <p className="mb-0">Leaves</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
