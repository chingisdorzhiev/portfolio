import React from "react";
import styles from "./HomeAboutStyles.module.css";
import background from "./../../../Images/back.png";
import CustomBtn from "../../Minors/Button/CustomBtn";
import { NavLink } from "react-router-dom";

function HomeAbout(props) {
  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.aboutContainer} ${darkStyles}`}>
      <div className={styles.textBox}>
        <h1>I'M</h1>
        <h2 style={{ backgroundImage: `url(${background})` }}>CHINGIS</h2>
        <h3>FRONTEND DEVELOPER</h3>
        <div className={styles.btnContainer}>
          <NavLink to={"/about"}>
            <CustomBtn color="yellow" text="About me" />
          </NavLink>
        </div>
        <div>sadsad</div>
      </div>
    </div>
  );
}

export default HomeAbout;
