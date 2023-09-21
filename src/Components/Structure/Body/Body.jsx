import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import styles from "./../Body/BodyStyles.module.css";
import HomePage from "./../../HomePage/HomePage";
import MyProjectsContainer from "./../../MyProjects/MyProjectsContainer";
import AboutContainer from "../../About/AboutContainer";

function Body(props) {
  return (
    <div className={styles.body}>
      <div>
        <Routes basename="/chingisdorzhiev">
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/projects" element={<MyProjectsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default Body;
