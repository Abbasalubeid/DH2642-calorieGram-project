import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FitnessModel from "./model/FitnessModel.js";
import {BrowserRouter } from "react-router-dom"
import {updateFirebaseFromModel, updateModelFromFirebase} from "../src/model/firebaseModel";
let model = new FitnessModel();

updateFirebaseFromModel(model);
updateModelFromFirebase(model);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App model ={model}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

