import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Route, Routes, useNavigate } from "react-router-dom";
import Offline from "../Offline/Offline";
import Online from "../Online/Online";
import Nutrition from "../Nutrition/Nutrition";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/offline" element={<Offline />} />
        <Route path="/online" element={<Online />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
