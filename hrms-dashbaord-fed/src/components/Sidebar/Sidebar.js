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
        <Accordion>
          <div>
            <NavLink to={RouteStrings.dashboard} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
              Dashboard
            </NavLink>
          </div>
          {/* <NavLink to={RouteStrings.payslips} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
            Payslips
          </NavLink> */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Employees</Accordion.Header>
            <Accordion.Body>
              <div>
                <NavLink to={RouteStrings.createEmployee} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
                  Employees List
                </NavLink>
              </div>
              <div>
                <NavLink to={RouteStrings.udpateEmployeeDependants} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
                  Update Employee Depedents
                </NavLink>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Leaves</Accordion.Header>
            <Accordion.Body>
              <div>
                <NavLink to={RouteStrings.leaves} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
                  Employee Leaves
                </NavLink>
              </div>
              <div>
                <NavLink to={RouteStrings.employeeLeaveCount} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
                  Update Leaves Count
                </NavLink>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <div>
            <NavLink to={RouteStrings.companydetails} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
              Company Profile
            </NavLink>
          </div>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Settings</Accordion.Header>
            <Accordion.Body>
              <div>
                <NavLink to={RouteStrings.createrole} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
                  Roles
                </NavLink>
              </div>
              <div>
                <NavLink to={RouteStrings.createshift} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
                  Shifts
                </NavLink>
              </div>
              <div>
                <NavLink to={RouteStrings.employeetype} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
                  Employee Type
                </NavLink>
              </div>
              <div>
                <NavLink to={RouteStrings.fields} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
                  Fields
                </NavLink>
              </div>
              <div>
                <NavLink to={RouteStrings.settings} activeclassname="active" className="sidebar_link" onClick={handleClickLink}>
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
