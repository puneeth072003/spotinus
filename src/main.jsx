import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { Navbar } from "./Navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Navbar />
    <App />
  </div>
);
