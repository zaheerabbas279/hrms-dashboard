import React from "react";
import "./updateemployeedependants.scss";
import { UpdateEmployeeDependantsTable } from "./UpdateEmployeesDependantsTable";

export const UpdateEmployeeDependants = () => {
  return (
    <>
      <div className="leves_style">
        <div className="mb-4">
          <h3 className="header_color">Update Employee Dependants</h3>
        </div>
        <div>
          <UpdateEmployeeDependantsTable />
        </div>
      </div>
    </>
  );
};
