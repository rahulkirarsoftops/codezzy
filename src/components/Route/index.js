import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Reactjs from '../common_comp./CourseContent/rectJS'
import QA from '../common_comp./CourseContent/QA'
import ReactNative from '../common_comp./CourseContent/reactNative'
import ROR from '../common_comp./CourseContent/ROR'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/reactJs" element={<CourseCon} /> */}
      <Route path="/courses" element={<Courses />} />
      <Route path="/reactjs" element={<Reactjs />} />
      <Route path="/reactNative" element={<ReactNative />} />
      <Route path="/ror" element={<ROR />} />
      <Route path="/QA" element={<QA />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
