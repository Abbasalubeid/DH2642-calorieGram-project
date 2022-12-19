import React from "react";
import ProfilePresenter from "./presenter/profilePresenter.js";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import DietPresenter  from "./presenter/dietPresenter.js";
import SummaryPresenter from "./presenter/summaryPresenter.js";
import Homepage from "./view/homepage.js";
import { Route, Routes } from "react-router-dom";
import NavbarPresenter from "./presenter/navbarPresenter.js";
import "./css/App.css";
import { AuthProvider } from  "./model/AuthContext";
import SignInPresenter from "./presenter/signInPresenter.js";
import SignupPresenter from "./presenter/singupPresenter.js";
import Account from './view/accountView';
import ProtectedRoute from './ProtectedRoute';


function App(props) {

  return(
    <div className="banner">
       <NavbarPresenter />
      
      <AuthProvider>
       <Routes>
         <Route path='/' element={<SignInPresenter />} />
         <Route path='/signup' element={<SignupPresenter />} />
         <Route
           path='/account'
           element={ <ProtectedRoute> <Account /> </ProtectedRoute>}/>
          <Route path='home'element={
              <ProtectedRoute>  <Homepage /> </ProtectedRoute>
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
              <ProtectedRoute>
            <SummaryPresenter model={props.model} />
              </ProtectedRoute>
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