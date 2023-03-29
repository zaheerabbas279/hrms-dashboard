import React from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyDetails.scss";

export const CompanyDetails = () => {
  const navigate = useNavigate();

  const gotodashboard = () => {
    navigate("/");
  };
  return (
    <>
      <small className="text-light goback" onClick={gotodashboard}>
        Back to Dashboard
      </small>
      <div className="companyDetails">
        <p className="mb-0 text-light">
          <strong>Company Details</strong>
        </p>

        <div className="my-2 d-flex align-items-center justify-content-between">
          <h4 className="text-light">Name & Address</h4>
          <h5 className="text-light editBtn">Edit</h5>
        </div>

        <div className="nameaddressdiv">
          <div className="card p-4">
            <div className="row align-items-center text-center">
              <div className="col-md-4">
                <h5 className="">Name and Registered Address</h5>
              </div>
              <div className="col-md-8">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, ab.
                </p>
              </div>
            </div>
            <div className="row align-items-center text-center">
              <div className="col-md-4">
                <h5 className="">Company Logo</h5>
              </div>
              <div className="col-md-8">
                <p className="mb-0">Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
