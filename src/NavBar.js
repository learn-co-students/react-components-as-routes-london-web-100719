import React from "react";
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const NavBar = () => (
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
    >
      About
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
    >
      Login
    </NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{ background: "orange" }}
    >
      SignUp
    </NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{ background: "green" }}
    >
      Messages
    </NavLink>
  </div>
);

export default NavBar;
