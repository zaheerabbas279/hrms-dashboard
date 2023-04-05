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
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const logout = () => {
    dispatch(setIsAuth(false));
  };
  const handleSidebar = () => {
    dispatch(setViewSidebar(!isSidebarOpen))
  }

  return (
    <div>
      <Navbar className="header_style">
        <Container fluid>
          <Navbar.Brand href="/">
            <h4 className="font_color">HRMS</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isAuth ? (
                <>
                  {width < breakpoint ? <></> : <>
                    <Nav.Link href="#link" className="font_color">Notifications</Nav.Link>
                  </>}

                  <NavDropdown id="basic-nav-dropdown" className="dprdwn">
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
                    <NavDropdown.Item onClick={logout} >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>

                  {width < breakpoint ? <>
                    {/* <Nav.Link href="#link" className="font_color">sidebar</Nav.Link> */}
                    <Button variant="primary" type="button" onClick={handleSidebar}>sidebar</Button>
                  </> : <>
                  </>}
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
