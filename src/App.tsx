import React from "react";
import Header from "./components/header/header";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import LaunchFunction from "./components/Launch/app";

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<LaunchFunction />} />
        </Routes>
      </div>
  );
}

export default App;
