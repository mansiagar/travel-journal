import React from "react";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar" color="primary" light>
        <NavbarBrand href="navbar-brand">My Travel Journal Dairy</NavbarBrand>
        <Nav>
          <NavItem className="navitem">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </NavItem>
          <NavItem className="navitem">
            <Link className="nav-link" to="/add-entry">
              Add Entry
            </Link>
          </NavItem>
          <NavItem className="navitem">
            <Link className="nav-link" to="/view-entry">
              View Entry
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
