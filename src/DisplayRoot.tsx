import React from "react";
import ReactDOM from "react-dom/client";
import { Display } from "./display/Display";
import "./style.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Display />
  </React.StrictMode>
);
