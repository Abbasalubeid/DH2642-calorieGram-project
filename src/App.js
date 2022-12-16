import React from "react";
import ProfilePresenter from "./presenter/profilePresenter.js";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import  DietPresenter  from "./presenter/dietPresenter.js";
import LoginPresenter from "./presenter/loginPresenter.js";
import RegisterPresenter from "./presenter/registerPresenter.js";
import Homepage from "./view/homepage.js";
import { Route, Routes } from "react-router-dom";
import NavbarView from "./view/navbarView.js";
import "./css/App.css";
import LogoutPresenter from "./presenter/logoutPresenter.js";
import PrivateRoute from "./view/privateRout.js";



function App(props) {

  return (
    <div className="banner">
      <NavbarView />
      <div className="mainContainer">
        <Routes>
         
          <Route path="" element={<Homepage />} />
          <Route path="profile" element={<ProfilePresenter model={props.model} showActivity = {true} showGoals = {true}/>} />
          <Route path="goals" element={<GoalsSearchPresenter model={props.model} />} />
          <Route path="bmi" element={<BmiPresenter model={props.model} />} />
          <Route path="diet" element={<DietPresenter model={props.model} />} />

          /*  for test*/

          <Route path="login" element={<LoginPresenter model={props.model} />} />
          <Route path="signup" element={<RegisterPresenter model={props.model} />} /> 

          <Route path="/home" element={<PrivateRoute> <Homepage /></PrivateRoute>} />
         
        </Routes>
      
       <LogoutPresenter/>
      </div>
    </div>);

}

export default App;
