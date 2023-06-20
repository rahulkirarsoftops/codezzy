import React from "react";
import "./style.css";
import ReactPlayer from "react-player";
import { Col, Row } from "antd";

const VideoPlayer = () => {
  return (
    <div className="adarsh">
      <Row gutter={{ xs: 8, sm: 16, md: 32, lg: 32 }}>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="video-div">
            <ReactPlayer
              url="https://youtu.be/u4ir71_4p24"
              width={"100%"}
              height={"480px"}
            />
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="top-most-container">
            <div className="subheading">SOFTWARE DEVELOPMENT COURSE</div>
            <div className="heading">
              <h3>
                Access Instantly and Solve{" "}
                <span> Your Problems with Ease Expert solution</span>
              </h3>
            </div>
            <div className="peragraph">
              <p>
                Maximize Your Efficiency and Productivity with Quick Access to
                Expert Solutions through Git
              </p>
            </div>
            <ul className="about-feature">
              <li>
                <i className="fa fa-check"></i>
                <h5>1:1 Mentorship</h5>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <h5>Best Study Material</h5>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <h5>Professional Content </h5>
              </li>
            </ul>
            {/* <button type="submit" className="btn3">
              Our Courses
            </button> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VideoPlayer;
