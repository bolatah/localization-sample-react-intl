import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Wrapper from "./components/Wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <App date={Date.now()} />
  </Wrapper>
);
serviceWorker.unregister();
