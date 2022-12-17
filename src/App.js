import React from "react";
import ProfilePresenter from "./presenter/profilePresenter.js";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import DietPresenter  from "./presenter/dietPresenter.js";
import SummaryPresenter from "./presenter/summaryPresenter.js";
import Homepage from "./view/homepage.js";
import { Route, Routes } from "react-router-dom";
import NavbarView from "./view/navbarView.js";
import "./css/App.css";

import { AuthProvider } from "./AuthContext.js";

import SigninView from './view/SigninView';
import SignupView from './view/SignupView';
import Account from './view/accountView';

import ProtectedRoute from './ProtectedRoute';


function App(props) {

  return(
    <div className="banner">
       <NavbarView />
      <AuthProvider>
       <Routes>
         <Route path='/' element={<SigninView />} />
         <Route path='/signup' element={<SignupView />} />
         <Route
           path='/account'
           element={ <ProtectedRoute> <Account /> </ProtectedRoute>}/>
          <Route path='home'element={ <ProtectedRoute>
               <Homepage />
             </ProtectedRoute>
           }
         />
          <Route
           path='bmi'
           element={
             <ProtectedRoute>
               <BmiPresenter   model={props.model}/>
             </ProtectedRoute>
           }
         />
         <Route
           path='profile'
           element={
             <ProtectedRoute>
               <ProfilePresenter model={props.model} showActivity = {true} showGoals = {true}/>
             </ProtectedRoute>
           }
         />
         <Route
           path='goals'
           element={
             <ProtectedRoute>
               <GoalsSearchPresenter model={props.model} />
             </ProtectedRoute>
           }
         />
         <Route 
            path="summary"
            element={
            <SummaryPresenter model={props.model} />
            }
          />
         <Route
           path='diet'
           element={
             <ProtectedRoute>
               <DietPresenter model={props.model} />
             </ProtectedRoute>
           }
         />
       </Routes>

      
     </AuthProvider>
    </div>
  )
}

export default App;
