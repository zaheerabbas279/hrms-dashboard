import React from "react";
import { Link, Route } from "react-router-dom";
import "./Sidebar.scss";
import { RouteStrings } from "../../utils/common";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_options">
        <li>
          <Link to={RouteStrings.dashboard} className="sidebar_link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.attendance} className="sidebar_link">
            Attendance
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.companydetails} className="sidebar_link">
            Company Details
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.createUser} className="sidebar_link">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};
