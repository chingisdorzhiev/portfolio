import React from "react";
import styles from "./MajorProjectCardStyles.module.css";
import CustomBtn from "../../Minors/Button/CustomBtn";

const MajorProjectCard = React.forwardRef((props, ref) => {
  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;
  return (
    <div className={`${styles.majorCard} ${darkStyles}`} ref={ref}>
      <div className={`${styles.infoSection} ${styles.section}`}>
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>

        <div>
          <h1>Tools</h1>
          <ul>
            {props.tools.map((el, index) => (
              <li key={index}>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${styles.imgSection} ${styles.section}`}>
        <img
          src={require(`./../../../Images/Projects/${props.image}.png`)}
          alt={props.name}
        />
      </div>

      <div className={`${styles.btnSection} ${styles.section}`}>
        <a href={props.link} target="_blank">
          <CustomBtn
            color={props.darkTheme ? "yellow" : props.color}
            text="View Project"
          />
        </a>
        <a href={props.github} target="_blank">
          <CustomBtn
            color={props.darkTheme ? "yellow" : props.color}
            text="GitHub"
          />
        </a>
      </div>
    </div>
  );
});

export default MajorProjectCard;
