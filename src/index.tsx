import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.querySelector("#root");

if (rootElement) {
  ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
}
