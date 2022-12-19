import React from 'react';
import App from './App';
import {BrowserRouter } from "react-router-dom"
import {updateFirebaseFromModel, updateModelFromFirebase, persistedModel} from "../src/model/firebaseModel";
import promiseNoData from './view/promiseNoData';
import { auth } from "./model/firebaseModel";
import { onAuthStateChanged } from "firebase/auth";
import FitnessModel from './model/FitnessModel';

export default function Root(){

  // const [promise, setPromise] = React.useState(null);
  // const [data, setData] = React.useState(null);
  // const [error, setError] = React.useState(null);
     const [signedIn, setSignedIn] = React.useState(false);
  

  function updateUserInfoACB(){
      updateFirebaseFromModel(defaultModel);
      updateModelFromFirebase(defaultModel);
  }

//   function promiseHasChangedACB() {
//     setData(null);
//     setError(null);
//     let cancelled = false;
    

//     function changedAgainACB() { cancelled = true; }

//     if (promise)
//         promise.then(function saveData(data) { if (!cancelled) setData(data); }).
//             catch(function saveError(error) { if (!cancelled) setError(error); });

//     return changedAgainACB;
// }
const defaultPerson = {
  age : 26,
  gender : "male",
  weight : 85,
  height : 190
}

const defaultGoals = {
  weightGoal : "Mild weight loss",
  weightPerWeek : "0.25 kg",
  caloriesIntake : "2051",
}

const defaultDiet = {
  protein : "110g",
  carbs : "240g",
  fat : "51g",
}

const defaultBmi = {
  bmi : "34.6",
  health : "Obese class I",
}
const defaultModel = new FitnessModel(defaultPerson, defaultGoals, defaultDiet, defaultBmi);

function wasCreatedACB() {
  onAuthStateChanged(auth, (user)=> {
    if (user){
      defaultModel.setUserID(user.uid);
      updateUserInfoACB();
    }
    else
      defaultModel.setUserID("");
      
  })
  return function isTakenDownACB() {};
}


React.useEffect(wasCreatedACB, []);
// React.useEffect(updateUserInfoACB, [signedIn]);
// React.useEffect(promiseHasChangedACB, [promise]);
// React.useEffect(notifyACB, [data, error]);



return (<React.StrictMode>
    <BrowserRouter>
       <App model ={defaultModel}/>
    </BrowserRouter>
  </React.StrictMode>
);

}