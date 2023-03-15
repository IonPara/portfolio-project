import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
  const theme = useSelector((state) => state.portfolio.theme);
  const [active, setActive] = useState("home");

  return (
    <div className="header">
      <nav className="nav-container">
        <NavLink
          onClick={() => setActive("home")}
          className={
            active === "home"
              ? `nav-element active-${theme} hover-${theme}`
              : `nav-element hover-${theme}`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setActive("about")}
          className={
            active === "about"
              ? `nav-element active-${theme} hover-${theme}`
              : `nav-element hover-${theme}`
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setActive("portfolio")}
          className={
            active === "portfolio"
              ? `nav-element active-${theme} hover-${theme}`
              : `nav-element hover-${theme}`
          }
          to={"/portfolio"}
        >
          Portfolio
        </NavLink>
        <NavLink
          onClick={() => setActive("news")}
          className={
            active === "news"
              ? `nav-element active-${theme} hover-${theme}`
              : `nav-element hover-${theme}`
          }
          to={"/news"}
        >
          News
        </NavLink>
        <NavLink
          onClick={() => setActive("contact")}
          className={
            active === "contact"
              ? `nav-element active-${theme} hover-${theme}`
              : `nav-element hover-${theme}`
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
