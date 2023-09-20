import React, { useState, useEffect } from "react";
import styles from "./HeaderStyles.module.css";
import { NavLink } from "react-router-dom";
import Toggle from "../../Minors/Toggle.jsx/Toggle";
import navImg from "./../../../Images/Icons/navbar.png";

function Footer(props) {
  const [color, setColor] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY < window.innerHeight) {
      return setColor(false);
    } else if (window.scrollY >= window.innerHeight) {
      return setColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const headerStyles = color
    ? `${styles.header} ${styles.headerColored}`
    : styles.header;

  // Смена темы и языка

  const changeTheme = () => {
    props.changeTheme();
  };

  const changeLanguage = (e) => {
    props.changeLanguage(e.target.value);
  };

  return (
    <div className={styles.navContainer}>
      <div className={headerStyles}>
        <div className={`${styles.block} ${styles.left}`}>
          <NavLink
            className={`${styles.link} ${styles.decoratedLink}`}
            to={"/about"}
          >
            <strong>About me</strong>
          </NavLink>
          <NavLink
            className={`${styles.link} ${styles.decoratedLink}`}
            to={"/projects"}
          >
            <strong>Projects</strong>
          </NavLink>
        </div>

        <div className={`${styles.block} ${styles.navMenu}`}>
          <input type="checkbox" id="check" className={styles.checkBtn} />
          <label htmlFor="check" className={styles.navBtn}>
            <img src={navImg} />
          </label>
          <div className={styles.mobileNav}>
            <NavLink className={styles.link} to={"/about"}>
              <strong>ABOUT ME</strong>
            </NavLink>
            <NavLink className={styles.link} to={"/projects"}>
              <strong>PROJECTS</strong>
            </NavLink>
          </div>
        </div>

        <div className={`${styles.block} ${styles.center}`}>
          <NavLink className={styles.link} to={"/"}>
            <h1
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              CHINGIS
            </h1>
          </NavLink>
        </div>

        <div className={`${styles.block} ${styles.right}`}>
          <Toggle
            label="Dark mode"
            toggled={props.darkTheme}
            onClick={changeTheme}
          />
          {/* <select multiple size="2" onChange={changeLanguage}>
          <option value="English">English</option>
          <option value="Русский">Русский</option>
        </select> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
