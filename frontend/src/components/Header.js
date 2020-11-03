import React from "react";
import { Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import SearchBox from "./HomeScreen/SearchBox";

const Header = () => {
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
      <Navbar.Brand href="/">Parking Space Analytics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Route render={({ history }) => <SearchBox history={history} />} />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <h4>
            <Nav.Link href="#">Sign Out</Nav.Link>
          </h4>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
