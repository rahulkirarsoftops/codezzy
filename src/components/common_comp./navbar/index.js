import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav>
            <div className='nav-wrapper'>
                <div className='logo'>
                    <NavLink to={"/"} style={{ textDecoration: "none" }}>
                        <div className='inner_logo'>
                            <h4>Code<span>Zzy</span></h4>
                        </div>
                    </NavLink>
                </div>
                <div className='list-div'>
                    <div className="dropdown">
                        <button className="dropbtn" >
                            <NavLink to="/" style={({ isActive }) =>
                                (isActive ? { color: "#27AD96" } : { color: "#385777", textDecoration: "none" })}>
                                Home
                            </NavLink>
                        </button>
                    </div>

                    <div className="dropdown">
                        <li className='dropbtn'>
                            <NavLink to="/about" style={({ isActive }) =>
                                (isActive ? { color: "#27AD96" } : { color: "#385777", textDecoration: "none" })}>
                                About Us
                            </NavLink>
                        </li>
                    </div>

                    <div className="dropdown">
                        <button className="dropbtn" >
                            <NavLink to="/courses" style={({ isActive }) =>
                                (isActive ? { color: "#27AD96" } : { color: "#385777", textDecoration: "none" })}>
                                Courses <i class="fa fa-angle-down icon"></i>
                            </NavLink>
                        </button>
                        <NavLink to={'/courses'} style={{ textDecoration: "none" }}>
                            <div className="dropdown-content">
                                <a href="/">Courses Style 1</a>
                                <a href="/">Courses Style 2</a>
                                <a href="/">Courses Style 3</a>
                                <a href="/">Courses Style 4</a>
                                <a href="/">Courses Details Style 1</a>
                                <a href="/">Courses Details Style 2</a>
                            </div>
                        </NavLink>
                    </div>

                    <div className="dropdown">

                        <li className='dropbtn'>
                            <NavLink to="/contact" style={({ isActive }) =>
                                (isActive ? { color: "#27AD96" } : { color: "#385777", textDecoration: "none" })}>
                                Contact
                            </NavLink>
                        </li>
                    </div>
                </div>

                <div class="hamburger" onClick={() => { setOpen(!open) }}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>

                <div className='social-icon'>
                    <div>
                        <a href="https://www.facebook.com/softopstechnologies/" target='_blank'>
                            <i className="fa fa-facebook fa-1x icon"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/SoftopsT/status/1579746050222751748" target="_blank">
                            <i className="fa fa-twitter fa-1x icon"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/softops-technologies/mycompany/" target='_blank'>
                            <i className="fa fa-linkedin fa-1x icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            {
                open && (
                    <>
                        <div className='hamburger-manu'>
                            <ul>
                                <li>
                                    <div className="dropdown">
                                        <button className="dropbtn" onClick={() => { setDropdown(!dropdown) }}>Home </button>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <NavLink to="/about" style={{ textDecoration: "none" }}>
                                            <li className='dropbtn'>About Us</li>
                                        </NavLink>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <button className="dropbtn" onClick={() => { setDropdown(!dropdown) }}>Courses <i class="fa fa-angle-down icon"></i></button>
                                        {
                                            dropdown && (
                                                <>
                                                    <NavLink to="/courses" style={{ textDecoration: "none" }}>
                                                        <div className="dropdown-content">
                                                            <a href="/">Courses Style 1</a>
                                                            <a href="/">Courses Style 2</a>
                                                            <a href="/">Courses Style 3</a>
                                                            <a href="/">Courses Style 4</a>
                                                            <a href="/">Courses Details Style 1</a>
                                                            <a href="/">Courses Details Style 2</a>
                                                        </div>
                                                    </NavLink>
                                                </>
                                            )
                                        }
                                    </div>
                                </li>

                                
                                <li>
                                    <div className="dropdown">
                                        <NavLink to="/contact" style={{ textDecoration: "none" }}>
                                            <li className='dropbtn'>Contact</li>
                                        </NavLink>
                                    </div>
                                </li>
                                <li>
                                    <div className='btn'>
                                        <button type='submit' className='btn2'>LOG IN</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </>
                )
            }



        </nav>
    )
}

export default Navbar
