import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/logo_white.svg";
import { FaAlignJustify } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [isActive, setisActive] = useState(false);

  const toggleMenu = () => {
    setisActive(!isActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Mobile Store Logo" />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isActive ? FaTimes : FaAlignJustify}></i>
      </div>
      <ul className={isActive ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink exact to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div>
        <ul className={isActive ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/cart" activeClassName="active">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
