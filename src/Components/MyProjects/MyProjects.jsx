import React, { useState, useEffect, useRef } from "react";
import styles from "./MyProjectsStyles.module.css";
import { projects } from "./../../ProjectsData";
import MajorProjectCard from "../Minors/MajorProjectCard/MajorProjectCard";

function MyProjects(props) {
  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;

  let cardRefs = useRef([]);

  const arr = projects.map((el, index) => {
    return (
      <MajorProjectCard
        ref={(el) => {
          cardRefs.current[index] = el;
        }}
        key={index}
        name={el.name}
        description={el.fullDescription}
        image={el.image}
        color={index % 2 === 0 ? "yellow" : "purple"}
        tools={el.tools}
        github={el.github}
        link={el.link}
        darkTheme={props.darkTheme}
      />
    );
  });

  return (
    <div className={styles.projectsPage}>
      <div className={`${styles.projectsContainer} ${darkStyles}`}>{arr}</div>
    </div>
  );
}

export default MyProjects;
