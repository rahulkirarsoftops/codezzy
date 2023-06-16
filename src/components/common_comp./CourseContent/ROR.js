import React from "react";
import { Row, Col } from "antd";
import "./index.css";
import { reactJs } from "./data";
import Navbar from "../navbar";
import Footer from "../footer";
import { ROR } from "./data";

function index() {
  return (
    <div>
      <Navbar />
      <div className="course-flow-container">
        <h1>ROR</h1>
        <p className="course-des">
          The course covers the basics of Ruby syntax, including variables, data
          types, control structures, and functions. It also introduces
          object-oriented programming concepts such as classes, objects, and
          inheritance. Additionally, the course covers important Ruby features
          such as modules, blocks, and lambdas. By the end of the course, you
          will have a solid understanding of the Ruby programming language and
          be able to write programs using Ruby. You will also be prepared to
          learn more advanced features of Ruby and explore its use in web
          development with frameworks like Rails. Overall, this course is a
          great choice if you are a programmer looking to expand your skills and
          learn a new language quickly. With its concise and focused approach,
          you will be able to get up to speed with Ruby in no time.
        </p>
        <h2>Training Process Flow</h2>
        {ROR.map((item, index) => {
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
