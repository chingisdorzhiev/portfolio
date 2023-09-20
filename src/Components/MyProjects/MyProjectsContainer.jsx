import { connect } from "react-redux";
import MyProjects from "./MyProjects";

let mapStateToProps = (state) => {
  return {
    darkTheme: state.app.darkTheme,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(MyProjects);
