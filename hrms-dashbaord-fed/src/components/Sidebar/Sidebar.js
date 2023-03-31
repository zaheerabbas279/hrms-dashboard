import React from "react";
import { Link } from "react-router-dom";
import { RouteStrings } from "../../utils/common";
import "./Sidebar.scss";

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
          <Link to={RouteStrings.leaves} className="sidebar_link">
            Leaves
          </Link>{" "}
        </li>
        <li>
          <Link to={RouteStrings.createuser} className="sidebar_link">
            Users
          </Link>{" "}
        </li>
        <li>
          <Link to={RouteStrings.createrole} className="sidebar_link">
            Roles
          </Link>{" "}
        </li>
        <li>
          <Link to={RouteStrings.settings} className="sidebar_link">
            Settings
          </Link>{" "}
        </li>
        <li>
          <Link to={RouteStrings.companydetails} className="sidebar_link">
            Company Details
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.payslips} className="sidebar_link">
            Payslips
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.fields} className="sidebar_link">
            Fields
          </Link>
        </li>
      </ul>
    </div>
  );
};
