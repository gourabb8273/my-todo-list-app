import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import store from "./store/store";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import LoginForm from "./components/LoginForm/loginForm";

/**
 * FINAL INDEX COMPONENT
 */
function IndexRoute() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/login" element={<LoginForm />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<IndexRoute />, document.getElementById("root"));

reportWebVitals();
