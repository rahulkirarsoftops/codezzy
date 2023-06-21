import React from "react";
import "./index.css";
// import image1 from "../../assets/PNG/Gallary/feature1.png";
// import image2 from "../../assets/PNG/Gallary/feature2.png";
import image3 from "../../assets/PNG/Gallary/feature3.png";
// import image3 from "../../assets/PNG/home.jpg";
import image1 from "../../assets/PNG/home1.jpg";
import image4 from "../../assets/PNG/home2.jpeg";
import image2 from "../../assets/PNG/home3.jpeg";

const Gallary = () => {
  return (
    <div className="container3">
      <div className="card-container">
        <div className="div1">
          <img src={image1} alt="custom" />
          <img src={image2} alt="custom" />
        </div>
        <div className="div2">
          <img src={image3} alt="custom" />
          <img className="img4" src={image4} alt="custom" />
        </div>
      </div>
      <div className="header inner-container">
        <div className="sub-heading1">SELF DEVELOPMENT COURSE</div>
        <div className="heading2">Get Instant Access To Expert Solution</div>
        <div className="pera2">
          Our programming courses can also provide you with access to expert
          instructors who can guide you through programming concepts and provide
          solutions to your coding challenges.
        </div>
      </div>
    </div>
  );
};

export default Gallary;
