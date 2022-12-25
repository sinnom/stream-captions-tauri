import React from "react";
import ReactDOM from "react-dom/client";
import { Controls } from "./controls/Controls";
import "./style.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Controls />
  </React.StrictMode>
);
