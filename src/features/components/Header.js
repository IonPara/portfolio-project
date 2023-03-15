import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const theme = useSelector((state) => state.portfolio.theme);
  const [active, setActive] = useState("home");
  const [hide, setHide] = useState(true);

  return (
    <div className="header">
      <nav className="nav-container ">
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
      <nav className="small-nav">
        <button
          onClick={() => setHide((prev) => !prev)}
          className={"text-4xl text-left mr-3 menu-btn text-" + theme}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={
            !hide
              ? "nav-collapse-container animate__animated animate__fadeInRight"
              : "hide"
          }
        >
          <div className="nav-collapse d-flex flex-column justify-evenly text-3xl text-left">
            <NavLink
              onClick={() => {
                setHide((prev) => !prev);
                setActive("home");
              }}
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
              onClick={() => {
                setHide((prev) => !prev);
                setActive("about");
              }}
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
              onClick={() => {
                setActive("portfolio");
                setHide((prev) => !prev);
              }}
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
              onClick={() => {
                setActive("news");
                setHide((prev) => !prev);
              }}
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
              onClick={() => {
                setActive("contact");
                setHide((prev) => !prev);
              }}
              className={
                active === "contact"
                  ? `nav-element active-${theme} hover-${theme}`
                  : `nav-element hover-${theme}`
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
