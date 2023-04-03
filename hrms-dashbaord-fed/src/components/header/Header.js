import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../store/reducers/ui.reducer";
import "./header.scss";

export const Header = (props) => {
  const { isAuth } = useSelector((state) => state.UIStore);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setIsAuth(false));
  };
  // const { isAuth } = props
  return (
    <div>
      <Navbar className="header_style" expand="md">
        <Container fluid>
          <Navbar.Brand href="/">
            <h4 className="text-light">HRMS</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isAuth ? (
                <>
                  <Nav.Link href="#link">Link</Nav.Link>

                  <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <button className="btn btn-danger" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {/* <a href="https://dollarbirdinc.com" target="_blank">dollarbird</a> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
