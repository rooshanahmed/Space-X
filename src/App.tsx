import React from "react";
import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import LaunchFunction from "./components/Launch/app";
import Home from "./components/Home";
import LaunchDetFunction from "./components/LaunchDet/app";
import Outleto from "./components/Outlet";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="main">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launches" element={<Outleto />}>
          <Route path="/" element={<LaunchFunction />} />
          <Route path=":id" element={<LaunchDetFunction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
