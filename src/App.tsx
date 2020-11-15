import React from "react";
import Header from "./components/header/header";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import LaunchFunction from "./components/Launch/app";
import Home from "./components/Home";
import LaunchDetFunction from "./components/LaunchDet/app";

function App() {
  return (
      <div className="main">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='launches' element={<LaunchFunction />} />
          <Route path='launch/:id' element={<LaunchDetFunction />} />
        </Routes>
      </div>
  );
}

export default App;
