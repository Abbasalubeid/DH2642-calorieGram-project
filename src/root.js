import React from 'react';
import App from './App';
import FitnessModel from "./model/FitnessModel.js";
import {BrowserRouter } from "react-router-dom"
import {updateFirebaseFromModel, updateModelFromFirebase, persistedModel} from "../src/model/firebaseModel";

export default function Root(){
  // const [model, setModel] = React.useState(null);
  // const [, reRender] = React.useState();
  const [promise, setPromise] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  function promiseHasChangedACB() {
    setData(null);
    setError(null);
    let cancelled = false;

    function changedAgainACB() { cancelled = true; }

    if (promise)
        promise.then(function saveData(data) { if (!cancelled) setData(data); }).
            catch(function saveError(error) { if (!cancelled) setError(error);});

    return changedAgainACB;
}



    // function notify() {
    //   // const newProm = {};
    //   // reRender(newProm);
    //   console.log(promise);
    //   console.log(data);
    //   console.log(error);
    //   // if (promiseState.data) {
    //   //   updateFirebaseFromModel(promiseState.data);
    //   //   updateModelFromFirebase(promiseState.data);
    //   // }
    // }
   const model = new FitnessModel({age : 25,
      gender : "male",
      weight : 85,
      height : 190})
function wasCreatedACB() {
  updateModelFromFirebase(model);
  updateFirebaseFromModel(model);

  return function isTakenDownACB() {};
}

React.useEffect(promiseHasChangedACB, [promise]);
React.useEffect(wasCreatedACB, []);


return (<React.StrictMode>
    <BrowserRouter>
      <App model ={model}/>
    </BrowserRouter>
  </React.StrictMode>
);

}