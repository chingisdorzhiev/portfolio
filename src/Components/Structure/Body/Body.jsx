import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./../Body/BodyStyles.module.css";
import HomePage from "./../../HomePage/HomePage";
import MyProjectsContainer from "./../../MyProjects/MyProjectsContainer";
import AboutContainer from "../../About/AboutContainer";

function Body(props) {
  return (
    <div className={styles.body}>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutContainer />} />
          <Route exact path="/projects" element={<MyProjectsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default Body;
