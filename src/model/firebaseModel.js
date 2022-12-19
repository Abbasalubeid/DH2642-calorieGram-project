import { getDatabase, ref, set, onValue, get } from "firebase/database";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from "../firebaseConfig";
import FitnessModel from "./FitnessModel";
import { onAuthStateChanged } from "firebase/auth";

const app = firebase.initializeApp(firebaseConfig)

const auth = app.auth();

// function persistedModel() {


//   function createModelACB(snapshot) {        
         
//       const defaultPerson = {
//         age : 26,
//         gender : "male",
//         weight : 85,
//         height : 190
//       }

//       const defaultGoals = {
//         weightGoal : "Mild weight loss",
//         weightPerWeek : "0.25 kg",
//         caloriesIntake : "2051",
//       }

//       const defaultDiet = {
//         protein : "110g",
//         carbs : "240g",
//         fat : "51g",
//       }

//       const defaultBmi = {
//         bmi : "34.6",
//         health : "Obese class I",
//       }


//       const person= snapshot.val()?.person ?? defaultPerson;
//       const goals = snapshot.val()?.goals ?? defaultGoals;
//       const diet = snapshot.val()?.diet ?? defaultDiet;
//       const bmi = snapshot.val()?.bmi ?? defaultBmi;

//       return new FitnessModel(person, goals, diet, bmi);
//   }

//   const db = getDatabase();
//   return get(ref(db, '/currentUser')).then(createModelACB);
// }

function updateFirebaseFromModel(model) {
  const db = getDatabase();
  function persistenceObserverACB(payload){
    
    if(model.currentUserId !== ""){
      if (payload){
        // if (payload.hasOwnProperty('newAge'))
        //   set(ref(db, `/${model.currentUserId}/person/age`), payload.newAge)
            
        // if (payload.hasOwnProperty('newGender'))
        //   set(ref(db, `/${model.currentUserId}/person/gender`), payload.newGender)

        // if(payload.hasOwnProperty('newWeight'))
        //   set(ref(db, `/${model.currentUserId}/person/weight`), payload.newWeight)
        
        // if(payload.hasOwnProperty('newHeight'))
        //   set(ref(db, `/${model.currentUserId}/person/height`), payload.newHeight)
        
        if(payload.hasOwnProperty('newGoals'))
          set(ref(db, `/${model.currentUserId}/goals`), payload.newGoals)

        if(payload.hasOwnProperty('newDiet'))
        set(ref(db, `/${model.currentUserId}/diet`), payload.newDiet)

        if(payload.hasOwnProperty('newBmi'))
          set(ref(db, `/${model.currentUserId}/bmi`), payload.newBmi)
      }
    }
  }

  model.addObserver(persistenceObserverACB);
 }



 function updateModelFromFirebase(model) {
  const db = getDatabase(app)

  if (model.currentUserId !== ""){
    console.log(model);
    function updateModelACB(snapshot){
      // console.log(snapshot.val());
      // console.log(model.person);
      // model.person = snapshot.val()?.person ?? model.person;
      model.currentGoal  = snapshot.val()?.goals ?? model.currentGoal
      model.currentDiet = snapshot.val()?.diet ??  model.currentDiet
      model.currentBmi  = snapshot.val()?.bmi ?? model.currentBmi;
    }

    get(ref(db, `/${model.currentUserId}`)).then(updateModelACB);



    // const ageRef = ref(db, `/${model.currentUserId}/person/age`);
    // const genderRef = ref(db, `/${model.currentUserId}/person/gender`);
    // const heightRef = ref(db, `/${model.currentUserId}/person/height`);
    // const weightRef = ref(db, `/${model.currentUserId}/person/weight`);
    const goalsRef = ref(db, `/${model.currentUserId}/goals`);
    const dietRef = ref(db, `/${model.currentUserId}/diet`);
    const bmiRef = ref(db, `/${model.currentUserId}/bmi`);

    // onValue(ageRef, function ageIsChanged (snapshot) { model.setAge(snapshot.val()); })

    // onValue(genderRef, function genderIsChanged (snapshot) {  model.setGender(snapshot.val()); })

    // onValue(heightRef, function heightIsChanged (snapshot) { model.setHeight(snapshot.val());  })

    // onValue(weightRef, function weightIsChanged (snapshot) {   model.setWeight(snapshot.val()); })

    // onValue(goalsRef, function goalsIsChanged (snapshot) {

    //                     function onlyValuesCB(object){
    //                       return snapshot.val()[object];
    //                     }

    //                   const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
    //                   const rightOrder = [wrongOrder[1], wrongOrder[2], wrongOrder[0]].join(",");

    //                   model.setUserGoal(rightOrder) 
    //                   })

    // onValue(dietRef, function dietIsChanged (snapshot) {
    //                   function onlyValuesCB(object){
    //                     return snapshot.val()[object];
    //                   }

    //                 const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
    //                 const rightOrder = [wrongOrder[2], wrongOrder[0], wrongOrder[1]].join(",");
                    
    //                 model.setUserDiet(rightOrder) 
    //                 })
    
    
    
    // onValue(bmiRef, function bmiIsChanged (snapshot) {
    //                 function onlyValuesCB(object){
    //                 return snapshot.val()[object];
    //                   }

    //               const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
    //               const rightOrder = [wrongOrder[0], wrongOrder[1]].join(",");
                  
    //               model.setUserBmi(rightOrder) 

    //             })         

    }

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

  export {writeUserData, deleteUserData, updateModelFromFirebase, updateFirebaseFromModel, auth}
