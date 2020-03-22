import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Axios from "axios";

Axios.interceptors.request.use(
  request => {
    console.log("interceptors request", request);
    return request;
  },
  error => {
    console.log("interceptors error", error);
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  response => {
    console.log("response", response);
    return response;
  },
  error => {
    console.log("response error", error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
