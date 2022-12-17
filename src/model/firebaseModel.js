import { getDatabase, ref, set, onValue, get } from "firebase/database";
import "firebase/auth"
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from "../firebaseConfig";
import FitnessModel from "./FitnessModel";


const app = firebase.initializeApp(firebaseConfig)

const auth = app.auth();
let datab = getDatabase(app);

function persistedModel() {
    // const model = {};

  function createModelACB(snapshot) {        
         
      const defaultPerson = {
        age : 25,
        gender : "male",
        weight : 85,
        height : 190
      }
      const person = snapshot.val() ?? defaultPerson;
      console.log(person);
      return new FitnessModel(person);
      // console.log(model);
  }

  // console.log(model);
  const db = getDatabase();
  return get(ref(db, '/currentUser')).then(createModelACB);
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

  onValue(ageRef, function ageIsChanged (snapshot) { model.setAge(snapshot.val()); console.log("1"); console.log(model.person);})

  onValue(genderRef, function genderIsChanged (snapshot) {  model.setGender(snapshot.val());  console.log("2"); console.log(model.person);})

  onValue(heightRef, function heightIsChanged (snapshot) { model.setHeight(snapshot.val());  console.log("3");  console.log(model.person);})

  onValue(weightRef, function weightIsChanged (snapshot) {   model.setWeight(snapshot.val()); console.log("4"); console.log(model.person);})

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

   export {writeUserData, deleteUserData, updateModelFromFirebase, updateFirebaseFromModel, auth, persistedModel}

  