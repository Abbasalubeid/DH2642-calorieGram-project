import React from 'react';
import App from './App';
import {BrowserRouter } from "react-router-dom"
import {updateFirebaseFromModel, updateModelFromFirebase, persistedModel} from "../src/model/firebaseModel";
import promiseNoData from './view/promiseNoData';
import { auth } from "./model/firebaseModel";
import { onAuthStateChanged } from "firebase/auth";

export default function Root(){

  const [promise, setPromise] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  

  function notifyACB(){
    if (data) {
      updateModelFromFirebase(data);
      updateFirebaseFromModel(data);
    }
  }

  function promiseHasChangedACB() {
    setData(null);
    setError(null);
    let cancelled = false;
    

    function changedAgainACB() { cancelled = true; }

    if (promise)
        promise.then(function saveData(data) { if (!cancelled) setData(data); }).
            catch(function saveError(error) { if (!cancelled) setError(error); });

    return changedAgainACB;
}

function wasCreatedACB() {
  onAuthStateChanged(auth, (user)=> {
    if (user){
      setPromise(persistedModel(user.uid));
    }
    else 
    {
      setPromise(persistedModel());
    }
      
      
  })
  return function isTakenDownACB() {};
}


React.useEffect(wasCreatedACB, []);
React.useEffect(promiseHasChangedACB, [promise]);
React.useEffect(notifyACB, [data, error]);



return (<React.StrictMode>
    <BrowserRouter>
    {promiseNoData({ promise, data, error }) || <App model ={data}/>}
    </BrowserRouter>
  </React.StrictMode>
);

}