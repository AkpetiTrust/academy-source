import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Course, Academy } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Academy />} />
        <Route path="/:post" exact element={<Course />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
