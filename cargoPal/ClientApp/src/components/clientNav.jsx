import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import { getUserId } from "../actions/authAction";

export default function Navigationbar(props) {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Navbar.Brand href="/home">CargoPal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/tracking">Tracking</Nav.Link>
          <Nav.Link href="/booking">Booking</Nav.Link>
          <Nav.Link href="/shipments">Shipments</Nav.Link>

          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
