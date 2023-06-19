import React from "react";
import { Row, Col } from "antd";
import "./index.css";
import { reactNative } from "./data";
import Navbar from "../navbar";
import Footer from "../footer";

function index() {
  return (
    <div>
      <Navbar />
      <div className="course-flow-container">
        <h1>React Native</h1>
        <p className="course-des">
          React Native is a popular framework for building native mobile
          applications using JavaScript and React. It allows developers to
          create mobile apps for iOS and Android platforms using a single
          codebase, which saves time and effort. The course features
          straightforward explanations by the instructor, practical assignments,
          and hands-on projects to help students understand the journey from the
          basics to advanced concepts of React Native. By taking this course,
          students can gain the proficiency needed to build high-quality Mobile
          applications using React Native and stand out in their careers.
        </p>
        <h2>Training Process Flow</h2>
        {reactNative.map((item, index) => {
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
    </div>
  );
}

export default index;
