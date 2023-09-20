import {
  changeThemeActionCreator,
  changeLanguageActionCreator,
} from "./../../../Redux/appReducer";
import { connect } from "react-redux";
import Header from "./Header.jsx";

let mapStateToProps = (state) => {
  return {
    darkTheme: state.app.darkTheme,
    language: state.app.language,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: () => {
      dispatch(changeThemeActionCreator());
    },
    changeLanguage: (language) => {
      dispatch(changeLanguageActionCreator(language));
    },
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
