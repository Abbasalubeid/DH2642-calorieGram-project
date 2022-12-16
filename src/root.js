import React from 'react';
import App from './App';
import {BrowserRouter } from "react-router-dom"
import {updateFirebaseFromModel, updateModelFromFirebase, persistedModel} from "../src/model/firebaseModel";
import promiseNoData from './view/promiseNoData';

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
    notifyACB();

    function changedAgainACB() { cancelled = true; }

    if (promise)
        promise.then(function saveData(data) { if (!cancelled) setData(data); notifyACB(); }).
            catch(function saveError(error) { if (!cancelled) setError(error); notifyACB(); });

    return changedAgainACB;
}

function wasCreatedACB() {
  setPromise(persistedModel());
  return function isTakenDownACB() {};
}


React.useEffect(wasCreatedACB, []);
React.useEffect(promiseHasChangedACB, [promise]);



return (<React.StrictMode>
    <BrowserRouter>
      {promiseNoData({ promise, data, error }) || <App model ={data}/>}
    </BrowserRouter>
  </React.StrictMode>
);

}