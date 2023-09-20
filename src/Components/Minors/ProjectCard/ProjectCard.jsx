import React from "react";
import styles from "./ProjectCardStyles.module.css";

const ProjectCard = React.forwardRef((props, ref) => {
  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.card} ${darkStyles}`} ref={ref}>
      <div className={styles.imgContainer}>
        {" "}
        <img
          src={require(`./../../../Images/Projects/${props.image}.png`)}
          alt={props.name}
        />
      </div>

      <div className={styles.intro}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
});

export default ProjectCard;
