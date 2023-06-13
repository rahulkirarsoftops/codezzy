import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Box = () => {
  return (
    <div className="inner-container qwert">
      <div className="sub-heading">BE A CODER</div>
      <div className="heading1">Want to Become a Perfect Coder?</div>
      <div className="pera">
        We offer a wide range of courses and programs that are designed to help
        you achieve your career goals.
      </div>
      <div className="btn">
        <Link to={"/contact"} className="btn1">
          BECOME CODER
        </Link>
      </div>
    </div>
  );
};

export default Box;
