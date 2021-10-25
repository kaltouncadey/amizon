import React from "react";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom";
import store from "./components/store/index";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
