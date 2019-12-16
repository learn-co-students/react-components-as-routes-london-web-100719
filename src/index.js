import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const activeLink = { background: "darkblue" };

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" style={link} activeStyle={activeLink}>
        Home
      </NavLink>
      <NavLink to="/about" style={link} activeStyle={activeLink}>
        About
      </NavLink>
      <NavLink to="/login" style={link} activeStyle={activeLink}>
        Login
      </NavLink>
    </div>
  );
};

const Home = () => {
  return <h1>Home!</h1>;
};

const About = () => {
  return <h1>This is my about component!</h1>;
};

const Login = () => {
  return (
    <form>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/login" component={Login}></Route>
    </div>
  </Router>,
  document.getElementById("root")
);
