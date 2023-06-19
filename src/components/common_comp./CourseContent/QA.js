import React from "react";
import { Row, Col } from "antd";
import "./index.css";
import { QA } from "./data";
import Navbar from "../navbar";
import Footer from "../footer";

function index() {
  return (
    <>
      <Navbar />
      <div className="course-flow-container">
        <h1>Quality Assurance</h1>
        <p className="course-des">
          Software testing,Different types of testing,Software BUG,Test
          cases,Create Test Cases,Black Box Testing,White Box Testing,Cross
          Browser Testing,UAT,JIRA,Regression Testing,Exploratory Testing,Volume
          vs Load Testing,SDLC(Software Development Life Cycle),Agile
          Methodologies, Web App,Mobile App Testing on multiple devices with
          multiple states,Responsiveness tools for web App,Adobe XD-Figma-Zeplin
          Designing tools,Bug Life Cycle-multiple scenarios,Bug
          Analysis-Different Environment.
        </p>
        <h2>Training Process Flow</h2>
        {QA.map((item, index) => {
          return (
            <div className="course-flow-chart-container">
              <Row gutter={[16, 16]}>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <div className="points-left-container">
                    <div className="point-circle">
                      <p> {item.id}</p>
                    </div>
                    <div className="point-heading">
                      <p>
                      {item.subHeading}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <div className="points-right-container">
                    <p>
                    {item.desc}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default index;
