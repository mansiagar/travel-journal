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
            <Link
              className="nav-link"
              to="/src/Components/HomePage/HomePage.jsx"
            >
              Home
            </Link>
          </NavItem>
          <NavItem className="navitem">
            <Link className="nav-link" to="/src/Components/AddEntry/Form.jsx">
              Add Entry
            </Link>
          </NavItem>
          <NavItem className="navitem">
            <Link
              className="nav-link"
              to="/src/Components/ViewEntry/ViewEntry.jsx"
            >
              View Entry
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
