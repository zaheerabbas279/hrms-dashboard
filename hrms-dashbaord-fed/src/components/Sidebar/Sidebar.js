import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
          <NavLink to={RouteStrings.dashboard} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={RouteStrings.createEmployee} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Employees
          </NavLink>
        </li>
        <li>
          <NavLink to={RouteStrings.leaves} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Leaves
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={RouteStrings.payslips} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Payslips
          </NavLink>
        </li> */}
        <li>
          <NavLink to={RouteStrings.createrole} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Roles
          </NavLink>
        </li>
        <li>
          <NavLink to={RouteStrings.companydetails} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Company Details
          </NavLink>
        </li>
        <li>
          <NavLink to={RouteStrings.fields} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Fields
          </NavLink>
        </li>
        <li>
          <NavLink to={RouteStrings.settings} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
