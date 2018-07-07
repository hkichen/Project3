import React from "react";
import { Navbar } from "react-bootstrap";

const Navbar = () => (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">
          Update Expenses
        </NavItem>
        <NavItem eventKey={2} href="#">
          Add a New Bill Statement
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Log Out
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navbar;
