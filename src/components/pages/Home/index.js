import React from "react";
import Navbar from "../../common_comp./navbar";
// import Banner from "../../common_comp./banner";
import Crousel from "../../common_comp./crousel-banner";
import Box from "../../common_comp./simple-box";
import Footer from "../../common_comp./footer";
import Box2 from "../../common_comp./box2";
import CROUSEL from "../../common_comp./crousel-banner/data";
// import Animation from "../../common_comp./animation";
import ExpertInstruction from "../../common_comp./ExpertInstruction";
// import CompaniesProfile from "../../common_comp./CompaniesProfile";
import TrandingCourse from "../../common_comp./TrandingCourse";
import Gallary from "../../common_comp./gallary";
import ExpertTeacher from "../../common_comp./expertTeacher";
import "./style.css";
import { procingData } from "./data";
import { PricingCard } from "../../atom";

const Home = () => {
  return (
    <div className="maincantainer">
      <Navbar />

      <ExpertInstruction />

      {/* <CompaniesProfile /> */}

      <TrandingCourse
        heading={"TRENDING COURSES"}
        subheading={"Popular Online Courses Around You"}
        paragraph={
          "The ultimate planning solution for busy women who want to reach their personal goals"
        }
      />

      <div className="card2-container">
        {procingData.map((item) => {
          return (
            <div>
              <PricingCard props={item} />
            </div>
          );
        })}
      </div>

      <Gallary />

      <TrandingCourse
        heading={"MAXIMIZE YOUR POTENTIALS"}
        subheading={"Learn the secrets to Life Success"}
        paragraph={
          "The ultimate planning solution for busy women who want to reach their personal goals"
        }
      />

      <ExpertTeacher />

      {/* <Banner /> */}

      <Crousel item={CROUSEL} />

      <Box />

      <Box2 />

      {/* <Animation /> */}

      <Footer />
    </div>
  );
};

export default Home;
