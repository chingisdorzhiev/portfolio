import React from "react";
import styles from "./HomeProjectStyles.module.css";
import Carousel from "../../Minors/Carousel/Carousel";
import { projects } from "./../../../ProjectsData";
import CustomBtn from "../../Minors/Button/CustomBtn";
import { NavLink } from "react-router-dom";

function HomeProjects(props) {
  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;
  const btnColor = props.darkTheme ? "yellow" : "purple";

  return (
    <div className={`${styles.projectSection} ${darkStyles}`}>
      <h1>PROJECTS</h1>
      <Carousel projects={projects} darkTheme={props.darkTheme} />
      <NavLink to={"/projects"}>
        <CustomBtn color={btnColor} text="Projects" />
      </NavLink>
    </div>
  );
}

export default HomeProjects;
