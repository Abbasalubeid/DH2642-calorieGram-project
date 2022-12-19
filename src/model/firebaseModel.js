import { getDatabase, ref, set, onValue, get } from "firebase/database";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from "../firebaseConfig";
import FitnessModel from "./FitnessModel";

const app = firebase.initializeApp(firebaseConfig)

const auth = app.auth();


function persistedModel(userId) {

  function createModelACB(snapshot) {  
    

    
    const person= snapshot.val()?.person ?? {};
    const goals = snapshot.val()?.goals ??  {};
    const diet = snapshot.val()?.diet ?? {};
    const bmi = snapshot.val()?.bmi ?? {};
    const activityLevel = snapshot.val()?.activityLevel ?? {};

    const model =  new FitnessModel(person, goals, diet, bmi, activityLevel);

    if (userId){
        console.log(userId);
        model.setUserId(userId);
        }
      else{
        console.log(userId);
        model.setUserId("");
      }
      return model;
  } 

  if(userId){
    const db = getDatabase();
    return get(ref(db, `/${userId}`)).then(createModelACB);
}
  else{
    const db = getDatabase();
    return get(ref(db, `/guest`)).then(createModelACB);
  }

    
}

function updateFirebaseFromModel(model) {
  const db = getDatabase();
  function persistenceObserverACB(payload){
    
    if(model.currentUserId !== ""){
      if (payload){
        if (payload.hasOwnProperty('newAge'))
          set(ref(db, `/${model.currentUserId}/person/age`), payload.newAge)
            
        if (payload.hasOwnProperty('newGender'))
          set(ref(db, `/${model.currentUserId}/person/gender`), payload.newGender)

        if(payload.hasOwnProperty('newWeight'))
          set(ref(db, `/${model.currentUserId}/person/weight`), payload.newWeight)
        
        if(payload.hasOwnProperty('newHeight'))
          set(ref(db, `/${model.currentUserId}/person/height`), payload.newHeight)
        
        if(payload.hasOwnProperty('newGoals'))
          set(ref(db, `/${model.currentUserId}/goals`), payload.newGoals)

        if(payload.hasOwnProperty('newDiet'))
        set(ref(db, `/${model.currentUserId}/diet`), payload.newDiet)

        if(payload.hasOwnProperty('newBmi'))
          set(ref(db, `/${model.currentUserId}/bmi`), payload.newBmi)

          if(payload.hasOwnProperty('newActivityLevel'))
          set(ref(db, `/${model.currentUserId}/activityLevel`), payload.newActivityLevel)
      }
    }
  }

  model.addObserver(persistenceObserverACB);
 }



 function updateModelFromFirebase(model) {
  const db = getDatabase(app)

  if (model.currentUserId !== ""){

    const ageRef = ref(db, `/${model.currentUserId}/person/age`);
    const genderRef = ref(db, `/${model.currentUserId}/person/gender`);
    const heightRef = ref(db, `/${model.currentUserId}/person/height`);
    const weightRef = ref(db, `/${model.currentUserId}/person/weight`);
    const goalsRef         = ref(db, `/${model.currentUserId}/goals`);
    const dietRef          = ref(db, `/${model.currentUserId}/diet`);
    const bmiRef           = ref(db, `/${model.currentUserId}/bmi`);
    const activityLevelRef = ref(db, `/${model.currentUserId}/activityLevel`);

    onValue(ageRef, function ageIsChanged (snapshot) {console.log(snapshot.val()); model.setAge(snapshot.val()); })

    onValue(genderRef, function genderIsChanged (snapshot) { console.log(snapshot.val()); model.setGender(snapshot.val()); })

    onValue(heightRef, function heightIsChanged (snapshot) { console.log(snapshot.val());model.setHeight(snapshot.val());  })

    onValue(weightRef, function weightIsChanged (snapshot) {  console.log(snapshot.val()); model.setWeight(snapshot.val()); })

    onValue(goalsRef, function goalsIsChanged (snapshot) {

                        function onlyValuesCB(object){
                          return snapshot.val()[object];
                        }

                      if(snapshot.val()){
                        const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
                        const rightOrder = [wrongOrder[1], wrongOrder[2], wrongOrder[0]].join(",");
  
                        model.setUserGoal(rightOrder) 
                      }

                      })

    onValue(dietRef, function dietIsChanged (snapshot) {
                      
                      function onlyValuesCB(object){
                        return snapshot.val()[object];
                      }

                    if(snapshot.val()){
                    const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
                    const rightOrder = [wrongOrder[2], wrongOrder[0], wrongOrder[1]].join(",");
                    
                    model.setUserDiet(rightOrder)
                    console.log(model);
                    }

                    })
    
    
    
    onValue(bmiRef, function bmiIsChanged (snapshot) {

                    function onlyValuesCB(object){
                    return snapshot.val()[object];
                    }

                  if(snapshot.val()){      
                  const wrongOrder = Object.keys(snapshot.val()).map(onlyValuesCB);
                  const rightOrder = [wrongOrder[0], wrongOrder[1]].join(",");
                  
                  model.setUserBmi(rightOrder) 

                  }

                })         

    onValue(activityLevelRef, function activityLevelIsChanged (snapshot) {  console.log(snapshot.val()); model.setWeight(snapshot.val()); })
    
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

  export {writeUserData, deleteUserData, updateModelFromFirebase, updateFirebaseFromModel, auth, persistedModel}
