import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FitnessModel from "./model/FitnessModel.js";
import {BrowserRouter } from "react-router-dom"
import {firebaseModelPromise, updateModelFromFirebase} from "../src/model/firebaseModel";

export default root(){


const [promiseState] = React.useState({});
const [, reRender] = React.useState();

let model = new FitnessModel();

// function notifyACB() {
//   const newProm = {};
//   reRender(newProm);
//   if (promiseState.data) {
//     updateFirebaseFromModel(promiseState.data);
//     updateModelFromFirebase(promiseState.data);
//   }
// }

function wasCreatedACB() {
  updateFirebaseFromModel(model);
  updateModelFromFirebase(model);

  return function isTakenDownACB() {};
}

React.useEffect(wasCreatedACB, []);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App model ={model}/>
    </BrowserRouter>
  </React.StrictMode>
);

}