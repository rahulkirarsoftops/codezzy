import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/courses" element={<Courses />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
