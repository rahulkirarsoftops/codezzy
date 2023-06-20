import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <div className="inner_logo">
              <h4>
                Code<span>Zzy</span>
              </h4>
            </div>
          </NavLink>
        </div>
        <div className="list-div">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: "#27AD96" }
                : { color: "#385777", textDecoration: "none" }
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? { color: "#27AD96" }
                : { color: "#385777", textDecoration: "none" }
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive
                ? { color: "#27AD96" }
                : { color: "#385777", textDecoration: "none" }
            }
          >
            Contact
          </NavLink>
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              Courses <i class="fa fa-angle-down icon"></i>
            </button>
            {dropdown && (
              <>
                <NavLink
                  to="/courses"
                  style={({ isActive }) =>
                    isActive
                      ? { color: "#27AD96" }
                      : { color: "#385777", textDecoration: "none" }
                  }
                >
                  <div className="dropdown-content">
                    <NavLink to="/reactjs">React js</NavLink>
                    <NavLink to="/reactNative">React Native</NavLink>
                    <NavLink to="/ror">Ruby on Rails</NavLink>
                    <NavLink to="/QA">Quality Assurance</NavLink>
                  </div>
                </NavLink>
              </>
            )}
          </div>
        </div>

        <div
          class="hamburger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

        {/* <div className="social-icon">
          <div>
            <a
              href="https://www.linkedin.com/company/codezzy/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin fa-1x icon"></i>
            </a>
          </div>
        </div> */}
      </div>

      {open && (
        <>
          <div className="hamburger-manu">
            <ul>
              {/* <li>
                <div className="dropdown">
                  <button
                    className="dropbtn"
                    onClick={() => {
                      setDropdown(!dropdown);
                    }}
                  >
                    Home{" "}
                  </button>
                </div>
              </li> */}
              <li>
                <div className="dropdown">
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    <li className="dropbtn">Home</li>
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="dropdown">
                  <button
                    className="dropbtn"
                    onClick={() => {
                      setDropdown(!dropdown);
                    }}
                  >
                    Courses <i class="fa fa-angle-down icon"></i>
                  </button>
                  {dropdown && (
                    <>
                      <NavLink to="/courses" style={{ textDecoration: "none" }}>
                        <div className="dropdown-content">
                          <NavLink to="/reactjs">React js</NavLink>
                          <NavLink to="/reactNative">React Native</NavLink>
                          <NavLink to="/ror">Ruby on Rails</NavLink>
                          <NavLink to="/QA">Quality Assurance</NavLink>
                        </div>
                      </NavLink>
                    </>
                  )}
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <NavLink to="/about" style={{ textDecoration: "none" }}>
                    <li className="dropbtn">About Us</li>
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="dropdown">
                  <NavLink to="/contact" style={{ textDecoration: "none" }}>
                    <li className="dropbtn">Contact</li>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
