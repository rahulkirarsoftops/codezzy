import React from "react";
import { Row, Col } from "antd";
import "./index.css";
import { reactJs } from "./data";
import Navbar from "../navbar";
import Footer from "../footer";

function index() {
  return (
    <div>
      <Navbar />
      <div className="course-flow-container">
        <h1>React Js</h1>
        <p className="course-des">
          React JS has experienced rapid growth and has become one of the most
          popular JavaScript libraries for web development in a short amount of
          time. This presents an excellent opportunity for individuals to learn
          React JS and enhance their skillset, which can help them excel in
          their careers. The course features straightforward explanations by the
          instructor, practical assignments, and hands-on projects to help
          students understand the journey from the basics to advanced concepts
          of React JS. By taking this course, students can gain the proficiency
          needed to build high-quality web applications using React JS and stand
          out in their careers.
        </p>
        <h2>Training Process Flow</h2>
        {reactJs.map((item, index) => {
          return (
            <div className="course-flow-chart-container">
              <Row gutter={[16, 16]}>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <div className="points-left-container">
                    <div className="point-circle">
                      <p className="sub-heading-para"> {item.id}</p>
                    </div>
                    <div className="point-heading">
                      <p>{item.subHeading}</p>
                    </div>
                  </div>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <div className="points-right-container">
                    <p>{item.desc}</p>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default index;
