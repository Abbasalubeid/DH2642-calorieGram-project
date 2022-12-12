import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig)


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

  export {writeUserData, deleteUserData}

