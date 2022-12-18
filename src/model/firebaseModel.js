import { getDatabase, ref, set, onValue, get } from "firebase/database";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from "../firebaseConfig";
import FitnessModel from "./FitnessModel";

const app = firebase.initializeApp(firebaseConfig)

const auth = app.auth();

function persistedModel() {
  
  function createModelACB(snapshot) {        
         
      const defaultPerson = {
        age : 26,
        gender : "male",
        weight : 85,
        height : 190
      }

      const defaultGoals = {
        weightGoal : "Mild weight loss",
        weightPerWeek : "0.25 kg",
        caloriesIntake : "2051",
      }

      const defaultDiet = {
        protein : "110g",
        carbs : "240g",
        fat : "51g",
      }

      const defaultBmi = {
        bmi : "34.6",
        health : "Obese class I",
      }

      const person = snapshot.val()?.currentPerson ?? defaultPerson;
      const goals = snapshot.val()?.goals ?? defaultGoals;
      const diet = snapshot.val()?.diet ?? defaultDiet;
      const bmi = snapshot.val()?.bmi ?? defaultBmi;

      return new FitnessModel(person, goals, diet, bmi);
  }

  const db = getDatabase();
  return get(ref(db, '/currentUser')).then(createModelACB);
}

function updateFirebaseFromModel(model) {
  const db = getDatabase();
  function persistenceObserverACB(payload){
    
      
    if (payload){
          if (payload.hasOwnProperty('newAge'))
            set(ref(db, 'currentUser/person/age'), payload.newAge)
              
          if (payload.hasOwnProperty('newGender'))
            set(ref(db, 'currentUser/person/gender'), payload.newGender)

          if(payload.hasOwnProperty('newWeight'))
            set(ref(db, 'currentUser/person/weight'), payload.newWeight)
          
          if(payload.hasOwnProperty('newHeight'))
            set(ref(db, 'currentUser/person/height'), payload.newHeight)
          
          if(payload.hasOwnProperty('newGoals'))
            set(ref(db, 'currentUser/goals'), payload.newGoals)

          if(payload.hasOwnProperty('newDiet'))
          set(ref(db, 'currentUser/diet'), payload.newDiet)

          if(payload.hasOwnProperty('newBmi'))
            set(ref(db, 'currentUser/bmi'), payload.newBmi)
      }
  }

  model.addObserver(persistenceObserverACB);
 }



 function updateModelFromFirebase(model) {
  const db = getDatabase(app)

  const ageRef = ref(db, 'currentUser/person/age');
  const genderRef = ref(db, 'currentUser/person/gender');
  const heightRef = ref(db, 'currentUser/person/height');
  const weightRef = ref(db, 'currentUser/person/weight');
  const goalsRef = ref(db, 'currentUser/goals');
  const dietRef = ref(db, 'currentUser/diet');
  const bmiRef = ref(db, 'currentUser/bmi');




  onValue(ageRef, function ageIsChanged (snapshot) { model.setAge(snapshot.val()); })

  onValue(genderRef, function genderIsChanged (snapshot) {  model.setGender(snapshot.val()); })

  onValue(heightRef, function heightIsChanged (snapshot) { model.setHeight(snapshot.val());  })

  onValue(weightRef, function weightIsChanged (snapshot) {   model.setWeight(snapshot.val()); })

  onValue(goalsRef, function goalsIsChanged (snapshot) {

                      function onlyValuesCB(object){
                        return snapshot.val()[object];
                      }

                    const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
                    const rightOrder = [wrongOrder[1], wrongOrder[2], wrongOrder[0]].join(",");

                    model.setUserGoal(rightOrder) 
                    })

  onValue(dietRef, function dietIsChanged (snapshot) {
                    function onlyValuesCB(object){
                      return snapshot.val()[object];
                    }

                  const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
                  const rightOrder = [wrongOrder[1], wrongOrder[2], wrongOrder[0]].join(",");
                  model.setUserDiet(rightOrder)
                  
                  })
  
  
  
  onValue(bmiRef, function bmiIsChanged (snapshot) {
                  function onlyValuesCB(object){
                  return snapshot.val()[object];
                    }

                const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
                const rightOrder = [wrongOrder[1], wrongOrder[2], wrongOrder[0]].join(",");
                model.setUserBmi(rightOrder)

              })         

  

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

  export {writeUserData, deleteUserData, updateModelFromFirebase, updateFirebaseFromModel, persistedModel, auth}
