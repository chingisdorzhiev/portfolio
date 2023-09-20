import "./App.css";
import React from "react";
import Body from "./Components/Structure/Body/Body";
import ScrollToTop from "./Components/ScrollTop";
import { Provider } from "react-redux";
import store from "./Redux/reduxStore";
import HeaderContainer from "./Components/Structure/Header/HeaderContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ScrollToTop />
        <HeaderContainer />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
