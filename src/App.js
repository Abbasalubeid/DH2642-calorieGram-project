import React from "react";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import Homepage from "./view/homepage.js";
import { Route, Routes } from "react-router-dom";
import NavbarView from "./view/navbarView.js";
import "./css/App.css";

function App(props) {

  return (
    <div className="banner">
      <NavbarView />
      <div className="mainContainer">
        <Routes>
          <Route path="home" element={<div className="homeContent"><Homepage /></div>} />
          <Route path="goals" element={<GoalsSearchPresenter model={props.model} />} />
          <Route path="bmi" element={<BmiPresenter model={props.model} />} />
        </Routes>

      </div>
    </div>);

}

export default App;
