import { connect } from "react-redux";
import About from "./About";

let mapStateToProps = (state) => {
  return {
    darkTheme: state.app.darkTheme,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(About);
