import React from "react";
import { Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";

const Header = ({ onRouteChange }) => {
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
      <LinkContainer to="/">
        <Navbar.Brand href="/">Parking Space Analytics</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Route render={({ history }) => <SearchBox history={history} />} />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <LinkContainer to="/signin">
            <h4>
              <Nav.Link>Sign Out</Nav.Link>
            </h4>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
