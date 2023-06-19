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
          Our institute is an educational institution that specializes in providing courses and training programs related to information technology. We offer a wide range of courses, from basic computer skills to advanced programming languages and software development.
          </div>
          <div className="social-icon">
            <div>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin fa-1x icon"></i>
              </a>
            </div>
           
          </div>
        </div>

        <div className="list-manu">
          <div className="lists">
            <h4>Explore</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Courses</li>
            </ul>
          </div>

          <div className="lists">
            <h4>Courses</h4>
            <ul>
              <li>React JS</li>
              <li>React Native</li>
              <li>Ruby On Rails</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          <div className="lists" style={{width:"222px"}}>
            <h4>Address</h4>
            <ul>
              <li>+91 9580364089 </li>
              <li>nancy@softopstechnologies.com</li>
              <li>Satguru Parinay,5th floor (507) PVVR+MPC, AB Rd, Scheme 54 PU4, Indore- 452011</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyride">
          © Copyright 2023 CodeZzy All rights reserved.
         <span>CodeZzy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
