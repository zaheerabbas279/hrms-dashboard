import React, { useState } from "react";
import "./leavestable.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AllLeavesTable } from "./allLeavesTable";

export const LeavesTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  const gotodashboard = () => { };
  return (
    <>
      <div className="companyDetails">
        <small className="goback" onClick={gotodashboard}>
          Back to Dashboard
        </small>
        <p className="mb-0">
          <strong>Leaves Management</strong>
        </p>

        <div className="leavecontainer my-3">
          <label htmlFor="" className="small">
            Please select Month and Year
          </label>
          <DatePicker
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div className="leavesTable">
          <AllLeavesTable />
        </div>
      </div>
    </>
  );
};
