import React from 'react';
import App from './App';
import FitnessModel from "./model/FitnessModel.js";
import {BrowserRouter } from "react-router-dom"
import {updateFirebaseFromModel, updateModelFromFirebase, persistedModel} from "../src/model/firebaseModel";

export default function Root(){

  const model = new FitnessModel()
  updateFirebaseFromModel(model);
  updateModelFromFirebase(model);
  

// const [model, SetModel] = React.useState();


// function wasCreatedACB() {
//   console.log("created")
//   SetModel(persistedModel())
//   updateFirebaseFromModel(model);
//   updateModelFromFirebase(model);
//   return function isTakenDownACB() {};
// }

// React.useEffect(wasCreatedACB, []);


return (<React.StrictMode>
    <BrowserRouter>
      <App model ={model}/>
    </BrowserRouter>
  </React.StrictMode>
);

}