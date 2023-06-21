import React from "react";
import Navbar from "../../common_comp./navbar";
// import Banner from "../../common_comp./banner";
import Crousel from "../../common_comp./crousel-banner";
import Box from "../../common_comp./simple-box";
import Footer from "../../common_comp./footer";
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
        subheading={"Our Courses"}
        paragraph={
          "The courses are designed to provide hands-on experience and practical knowledge to the students. Codezzy has experienced trainers who have in-depth knowledge and expertise in their respective domains. Apart from training, Codezzy also offers placement assistance to its students. Codezzy has state-of-the-art infrastructure with well-equipped classrooms, labs, and other facilities. The institute provides a friendly and supportive learning environment."
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
        subheading={"Learn the Secrets to Life Success"}
        paragraph={
          "Cultivate a positive mindset and focus on the opportunities and possibilities rather than the obstacles and challenges."
        }
      />

      <ExpertTeacher />

      {/* <Banner /> */}

      <Crousel item={CROUSEL} />

      <Box />

      {/* <Box2 /> */}

      {/* <Animation /> */}

      <Footer />
    </div>
  );
};

export default Home;
