import React from "react";
import HomeAbout from "./HomePageComponents/HomeAbout";
import HomeProjects from "./HomePageComponents/HomeProjects";
import HomeContacts from "./HomePageComponents/HomeContacts";
import { connect } from "react-redux";
import styles from "./HomePageStyles.module.css";

function HomePage(props) {
  return (
    <div className={styles.homePageContainer}>
      <HomeAbout darkTheme={props.darkTheme} />
      <HomeProjects darkTheme={props.darkTheme} />
      <HomeContacts darkTheme={props.darkTheme} />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    darkTheme: state.app.darkTheme,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(HomePage);
