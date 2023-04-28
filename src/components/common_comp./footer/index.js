import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer">
        <div className="footer-wrapper">
          <div className="logo">
            <NavLink to={"/"} style={{ textDecoration: "none" }}>
              <div className="footer_logo">
                <h4>
                  Code<span>Zzy</span>
                </h4>
              </div>
            </NavLink>
          </div>
          <div className="peragraph1">
            Veniam Sequi molestias aut necessitatibus optio magni at natus
            accusamus.Lorem ipsum dolor sit amet, consectetur adipisicin gelit,
            sed do eiusmod tempor incididunt .
          </div>
          <div className="social-icon">
            <div>
              <a
                href="https://www.facebook.com/softopstechnologies/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook fa-1x icon"></i>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/SoftopsT/status/1579746050222751748"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter fa-1x icon"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/softops-technologies/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin fa-1x icon"></i>
              </a>
            </div>
            <div>
              <a
                href="https://in.pinterest.com/#save"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-pinterest fa-1x icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="list-manu">
          <div className="lists">
            <h4>Explore</h4>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Projects</li>
              <li>Terms & Condition</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="lists">
            <h4>Courses</h4>
            <ul>
              <li>SEO Business</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Site Development</li>
              <li>Social Marketing</li>
            </ul>
          </div>

          <div className="lists">
            <h4>Address</h4>
            <ul>
              <li>+(68) 345 5902</li>
              <li>[email protected]</li>
              <li>123 Fifth Floor East 26th Street, New York, NY 10011</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyride">
          © Copyright CodeZzy Template All rights reserved.Crafted by{" "}
          <a
            href="https://www.softopstechnologies.com/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <span>SoftOps Technologies</span>
          </a>
        </div>
        <div className="bottom-nav">
          <ul>
            <li className="list-inline-item">
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#27AD96" }
                    : { color: "#535967", textDecoration: "none" }
                }
              >
                Home
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink
                to="/courses"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#27AD96" }
                    : { color: "#535967", textDecoration: "none" }
                }
              >
                Courses
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink
                to="/blog"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#27AD96" }
                    : { color: "#535967", textDecoration: "none" }
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#27AD96" }
                    : { color: "#535967", textDecoration: "none" }
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
