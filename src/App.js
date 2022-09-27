import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";

// import Header from "./components/Header";
// import { Test } from "./components/Test"
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* <Header /> */}
        {/* <Test /> */}
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
