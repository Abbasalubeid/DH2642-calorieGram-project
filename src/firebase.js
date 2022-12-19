// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// kabzi jemire
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
// import firebaseConfig from "../firebaseConfig";


// kisab nabzi

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =  {
    apiKey: "AIzaSyCJZ06wSwtziKh3ReECti63X2j10intxiA",
    authDomain: "projekt40-30e90.firebaseapp.com",
    databaseURL: "https://projekt40-30e90-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projekt40-30e90",
    storageBucket: "projekt40-30e90.appspot.com",
    messagingSenderId: "115354241534",
    appId: "1:115354241534:web:58ebcfed9398940e7318af"
  };


  // natey 
//   const app = firebase.initializeApp(firebaseConfig)

//   export const auth = app.auth();
 

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = app.auth();
export default app
