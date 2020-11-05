import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link, LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../redux/actions/userActions";

const Header = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const redirect = "/login" || "/";

  // useEffect(() => {
  //   if (!userInfo) {
  //     history?.push("/login");
  //   }
  // }, [userInfo, history]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    // <div style={{ display: "flex", justifyContent: "flex-end" }}>
    //   <Navbar bg="light">
    //     <Navbar.Brand href="#home">Sign Out</Navbar.Brand>
    //   </Navbar>
    // </div>
    // <Navbar bg="light" style={{ display: "flex", justifyContent: "flex-end" }}>
    //   <Navbar.Brand href="#home">Sign Out</Navbar.Brand>
    // </Navbar>
    <Navbar expand="lg" collapseOnSelect>
      <LinkContainer to="/cities">
        <Navbar.Brand>Parking Space Analytics</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Route render={({ history }) => <SearchBox history={history} />} />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav onClick={logoutHandler}>
          {/* <Nav.Link>Signed in as: {userInfo.name}</Nav.Link> */}

          <a href="/login">
            <h4>Sign Out</h4>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
