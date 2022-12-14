import React from 'react';
import App from './App';
import FitnessModel from "./model/FitnessModel.js";
import {BrowserRouter } from "react-router-dom"
import {updateFirebaseFromModel, updateModelFromFirebase} from "../src/model/firebaseModel";

export default function Root(){

const [promiseState] = React.useState({});
const [, reRender] = React.useState();

let model = new FitnessModel();


function wasCreatedACB() {
  console.log("created")
  updateFirebaseFromModel(model);
  updateModelFromFirebase(model);

  return function isTakenDownACB() {};
}

React.useEffect(wasCreatedACB, []);


return (<React.StrictMode>
    <BrowserRouter>
      <App model ={model}/>
    </BrowserRouter>
  </React.StrictMode>
);

}