import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RouteStrings } from "../../utils/common";
import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { setViewSidebar } from "../../store/reducers/ui.reducer";
import Accordion from 'react-bootstrap/Accordion';

export const Sidebar = () => {
  const { isSidebarOpen } = useSelector(state => state.UIStore)
  const dispatch = useDispatch()
  const handleClickLink = () => {
    dispatch(setViewSidebar(!isSidebarOpen))
  }
  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
      <div className="sidebar_options">
        <Accordion alwaysOpen>
          <div>
            <NavLink to={RouteStrings.dashboard} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
              Dashboard
            </NavLink>
          </div>
          {/* <NavLink to={RouteStrings.payslips} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
            Payslips
          </NavLink> */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Employees</Accordion.Header>
            <Accordion.Body>
              <NavLink to={RouteStrings.createEmployee} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
                Employees List
              </NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Leaves</Accordion.Header>
            <Accordion.Body>
              <NavLink to={RouteStrings.leaves} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
                Employee Leaves
              </NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <div>
            <NavLink to={RouteStrings.companydetails} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
              Company Details
            </NavLink>
          </div>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Settings</Accordion.Header>
            <Accordion.Body>
              <div>
                <NavLink to={RouteStrings.createrole} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
                  Roles
                </NavLink>
              </div>
              <div>
                <NavLink to={RouteStrings.fields} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
                  Fields
                </NavLink>
              </div>
              <div>
                <NavLink to={RouteStrings.settings} activeClassName="active" className="sidebar_link" onClick={handleClickLink}>
                  Admin Settings
                </NavLink>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
