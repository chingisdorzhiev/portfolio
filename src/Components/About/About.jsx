import React from "react";
import styles from "./AboutStyles.module.css";

function About(props) {
  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.aboutPage} ${darkStyles}`}>
      <div className={styles.info}>
        <div>
          <h1>ABOUT</h1>
          <p>
            My name is Chingis Dorzhiev. An enthusiastic and detail-oriented
            Frontend Developer with knowledge in HTML and CSS, JavaScript and TypeScript, React and Redux.
            Seeking to utilize my technical skills and expertise to
            provide value to the employer and contribute to successful projects
            both today and in the future. Aiming to take on new challenges and
            utilize my coding and debugging skills for developing new features
            and enhance the overall user experience.
          </p>
        </div>
        <div>
          <h1>SKILLS</h1>
          <ul>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>JavaScript</p>
            </li>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
