import React from "react";
import '../App.css'
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <h1 id="title">Sample App</h1>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Posts
          </NavLink>
          <NavLink to="/contact" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;