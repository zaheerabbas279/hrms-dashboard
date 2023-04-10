import React from "react";
import { Link } from "react-router-dom";
import { RouteStrings } from "../../utils/common";
import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { setViewSidebar } from "../../store/reducers/ui.reducer";

export const Sidebar = () => {
  const { isSidebarOpen } = useSelector(state => state.UIStore)
  const dispatch = useDispatch()
  const handleClickLink = () => {
    dispatch(setViewSidebar(!isSidebarOpen))
  }

  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
      <ul className="sidebar_options">
        <li>
          <Link to={RouteStrings.dashboard} className="sidebar_link" onClick={handleClickLink}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.leaves} className="sidebar_link" onClick={handleClickLink}>
            Leaves
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.payslips} className="sidebar_link" onClick={handleClickLink}>
            Payslips
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.createuser} className="sidebar_link" onClick={handleClickLink}>
            Employees
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.createrole} className="sidebar_link" onClick={handleClickLink}>
            Roles
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.companydetails} className="sidebar_link" onClick={handleClickLink}>
            Company Details
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.fields} className="sidebar_link" onClick={handleClickLink}>
            Fields
          </Link>
        </li>
        <li>
          <Link to={RouteStrings.settings} className="sidebar_link" onClick={handleClickLink}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};
