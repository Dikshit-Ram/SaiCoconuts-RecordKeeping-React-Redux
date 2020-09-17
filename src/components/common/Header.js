import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
      <NavLink
        exact
        to="/"
        activeClassName="active"
        activeStyle={{ fontWeight: "bold" }}
      >
        Home
      </NavLink>
      <h1>Welcome to Sai coconut record keeping</h1>
    </header>
  );
};

export default Header;
