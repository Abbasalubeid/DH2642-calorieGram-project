// new imported fire base
import "firebase/auth"
import 'firebase/compat/auth';

import firebase from 'firebase/compat/app';

import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "../firebaseConfig";


const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth();

// new implementing outh
//const auth = app.auth();


 function writeUserData(age, height, weight) {
    const db = getDatabase();

    set(ref(db, 'currentUser/'), {
      age : age,
      height: height,
      weight : weight
    });
  }

  function deleteUserData() {
    const db = getDatabase();

    set(ref(db, 'currentUsers/'), null);
  }

  export {writeUserData, deleteUserData, auth}

