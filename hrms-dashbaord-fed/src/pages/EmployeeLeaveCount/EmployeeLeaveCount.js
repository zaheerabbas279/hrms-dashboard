import React from "react";
import "./EmployeeLeaveCount.scss";
import { EmployeeLeaveCountTable } from "./EmployeeLeaveCountTable";

export const EmployeeLeaveCount = () => {
  return (
    <>
      <div className="leves_style">
        {/* <div className="text-end"></div> */}
        {/* <LeavesTable /> */}
        <div className="mb-4">
          <h3 className="header_color">Leave Count</h3>
        </div>
        <div>
          <EmployeeLeaveCountTable />
        </div>
      </div>
    </>
  );
};
