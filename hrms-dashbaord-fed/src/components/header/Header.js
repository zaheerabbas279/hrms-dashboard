import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsAuth, setViewSidebar } from "../../store/reducers/ui.reducer";
// import { setViewSidebar } from "../../utils/ConfigureStore"
import "./header.scss";
import { Button } from "react-bootstrap";
import { Images } from "../../utils/images";
import { RouteStrings } from "../../utils/common";

export const Header = ({ onClick }) => {
  const { isAuth, isSidebarOpen } = useSelector((state) => state.UIStore);
  // const { isSidebarOpen } = useSelector((state) => state.Sidebar);
  const dispatch = useDispatch();

  // const [mediaMatch, setMediaMatch] = useState(true);
  // console.log("🚀 ~ file: Header.js:17 ~ Header ~ mediaMatch:", mediaMatch)
  // const handler = e => setMediaMatch(e.matches);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  // useEffect(() => {
  //   window.matchMedia('(max-width: 767px)').addEventListener(handler);
  //   return () => {
  //     window.removeEventListener(handler);
  //   };
  // }, []);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const logout = () => {
    dispatch(setIsAuth(false));
  };
  const handleSidebar = () => {
    dispatch(setViewSidebar(!isSidebarOpen));
  };

  return (
    <div>
      <Navbar className="header_style">
        <Container fluid>
          <Navbar.Brand href="/">
            <h4 className="font_color">HRMS</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {isAuth ? (
                <>
                  {width < breakpoint ? (
                    null
                  ) : (
                    <>
                      <p className="font_color m-0">
                        John Doe
                      </p>
                    </>
                  )}

                  <NavDropdown id="basic-nav-dropdown" className="dprdwn">
                    <div>
                      {width < breakpoint ? (
                        <>
                          <p className="mb-0 ms-3">
                            Hi, <strong>John Doe</strong>
                          </p></>
                      ) : null}
                    </div>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={RouteStrings.userprofile}>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>

                  {width < breakpoint ? (
                    <>
                      {/* <Nav.Link href="#link" className="font_color">sidebar</Nav.Link> */}
                      <div className="hamber_div">
                        <img
                          src={Images.hamburger}
                          className="img-fluid"
                          onClick={handleSidebar}
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
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
