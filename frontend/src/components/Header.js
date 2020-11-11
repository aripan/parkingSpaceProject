import React from "react";
import { useDispatch } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import SearchBox from "./SearchBox";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar expand="lg" collapseOnSelect>
      <LinkContainer to="/parkinglots">
        <Navbar.Brand>Parking Space Analytics</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
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
