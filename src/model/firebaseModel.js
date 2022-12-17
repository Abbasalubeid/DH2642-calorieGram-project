import { getDatabase, ref, set, onValue, get } from "firebase/database";

import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import "firebase/auth"
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from "../firebaseConfig";
import FitnessModel from "./FitnessModel";



const app = firebase.initializeApp(firebaseConfig)

const auth = app.auth();

// från här


const UserContext = createContext();

  function AuthProvider  ({ children }) {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  function logout  () {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     console.log(currentUser.email);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

 function UserAuth  () {
  return useContext(UserContext);
};


// export{UserAuth, AuthProvider}

// till här


function persistedModel() {

  function createModelACB(snapshot) {        
         
      const defaultPerson = {
        age : 25,
        gender : "male",
        weight : 85,
        height : 190
      }

      const defaultGoals = {
        weightGoal : "Mild weight loss",
        weightPerWeek : "0.25 kg",
        caloriesIntake : "2051",
      }

      const person = snapshot.val()?.currentUser ?? defaultPerson;
      const goals = snapshot.val()?.goals ?? defaultGoals;

      console.log(goals);
      return new FitnessModel(person, goals);
  }

  const db = getDatabase();
  return get(ref(db)).then(createModelACB);
}

function updateFirebaseFromModel(model) {
  const db = getDatabase();
  function persistenceObserverACB(payload){
    
      
    if (payload){
          if (payload.hasOwnProperty('newAge'))
            set(ref(db, 'currentUser/age'), payload.newAge)
              
          if (payload.hasOwnProperty('newGender'))
            set(ref(db, 'currentUser/gender'), payload.newGender)

          if(payload.hasOwnProperty('newWeight'))
            set(ref(db, 'currentUser/weight'), payload.newWeight)
          
          if(payload.hasOwnProperty('newHeight'))
            set(ref(db, 'currentUser/height'), payload.newHeight)
          
          if(payload.hasOwnProperty('newGoals'))
            set(ref(db, 'goals'), payload.newGoals)
      }
  }

  model.addObserver(persistenceObserverACB);
 }



 function updateModelFromFirebase(model) {
  const db = getDatabase(app)

  const ageRef = ref(db, 'currentUser/age');
  const genderRef = ref(db, 'currentUser/gender');
  const heightRef = ref(db, 'currentUser/height');
  const weightRef = ref(db, 'currentUser/weight');
  const goalsRef = ref(db, 'goals');


  onValue(ageRef, function ageIsChanged (snapshot) { model.setAge(snapshot.val()); })

  onValue(genderRef, function genderIsChanged (snapshot) {  model.setGender(snapshot.val()); })

  onValue(heightRef, function heightIsChanged (snapshot) { model.setHeight(snapshot.val());  })

  onValue(weightRef, function weightIsChanged (snapshot) {   model.setWeight(snapshot.val()); })

  onValue(goalsRef, function goalsIsChanged (snapshot) {   model.setUserGoal(snapshot.val()); })
  

}

 function writeUserData(age, height, weight) {
    const db = getDatabase(app);

    set(ref(db, 'currentUser/'), {
      age : age,
      height: height,
      weight : weight
    });
  }

  function deleteUserData() {
    const db = getDatabase(app);

    set(ref(db, 'currentUsers/'), null);
   }

  export {UserAuth, AuthProvider,writeUserData, deleteUserData, updateModelFromFirebase, updateFirebaseFromModel, persistedModel, auth}
