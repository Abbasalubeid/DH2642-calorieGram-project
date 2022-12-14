import { getDatabase, ref, set, onValue } from "firebase/database";
// new imported fire base
import "firebase/auth"
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from "../firebaseConfig";


const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth();

// new implementing outh
//const auth = app.auth();

// function persistedModel() {
    
//   function createModelACB(firebaseData) {        
         
//       const defaultPerson = {
//         age : 25,
//         gender : "male",
//         weight : 85,
//         height : 190
//       }
//       const person = firebaseData.val()?.person ?? defaultPerson;

//       return new DinnerModel(person);
      
//   }
//   const db = getDatabase();
//   return onValue(ref(db, '/currentUser'), createModelACB, {onlyOnce : true});
// }

function updateFirebaseFromModel(model) {
  function persistenceObserverACB(payload){
    const db = getDatabase();
      if (payload){
        
          if (payload.hasOwnProperty('newAge'))
            set(ref(db, 'currentUser/'), {age : payload.newAge,
                                          gender : model.person.gender,
                                          height : model.person.height,
                                          weight : model.person.weight
                                          })
              
          if (payload.hasOwnProperty('newGender'))
            set(ref(db, 'currentUser/'), {age : model.person.age,
                                          gender : payload.newGender,
                                          height : model.person.height,
                                          weight : model.person.weight
                                          })

          if(payload.hasOwnProperty('newWeight'))
            set(ref(db, 'currentUser/'), {age : model.person.age,
                                          gender : model.person.gender,
                                          height : model.person.height,
                                          weight : payload.newWeight
                                          })
          
          if(payload.hasOwnProperty('newHeight'))
          set(ref(db, 'currentUser/'), {age : model.person.age,
                                        gender : model.person.gender,
                                        height : payload.newHeight,
                                        weight : model.person.weight
                                        })
      }
  }

  model.addObserver(persistenceObserverACB);
}



function updateModelFromFirebase(model) {
  const db = getDatabase();

  const ageRef = ref(db, 'currentUser/age');
  const genderRef = ref(db, 'currentUser/gender');
  const heightRef = ref(db, 'currentUser/height');
  const weightRef = ref(db, 'currentUser/weight');

  onValue(ageRef, function ageIschanged (snapshot) { model.setAge(snapshot.val());})

  onValue(genderRef, function weightIschanged (snapshot) {   console.log(model.person); model.setGender(snapshot.val());})

  onValue(heightRef, function heightIschanged (snapshot) {   console.log(model.person); model.setHeight(snapshot.val());})

  onValue(weightRef, function weightIschanged (snapshot) {   console.log(model.person); model.setWeight(snapshot.val());})

}

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

  export {writeUserData, deleteUserData, updateModelFromFirebase, updateFirebaseFromModel, auth}

