import React, { useState } from "react";
import "./leavestable.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AllLeavesTable } from "./allLeavesTable";

export const LeavesTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="companyDetails">
        <h4 className="mb-4">Employee Leaves</h4>

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
