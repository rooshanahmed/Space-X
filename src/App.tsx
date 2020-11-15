import React from "react";
import Header from "./components/header/header";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import LaunchFunction from "./components/Launch/app";
import Home from "./components/Home";

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='launches' element={<LaunchFunction />} />
        </Routes>
      </div>
  );
}

export default App;
